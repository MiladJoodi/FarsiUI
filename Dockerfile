# Paasta / Docker production image for the FarsiUI docs app (apps/v4).
# Build context MUST be the monorepo root (not apps/v4) so pnpm workspaces work.
#
# Multi-stage:
#   builder — install + turbo/v4 build (needs ~6GB Node heap; run in CI)
#   runner  — prebuilt app only; `pnpm --filter=v4 start` (no next build)
#
# pnpm layout (critical for multi-stage COPY):
#   - Content-addressable store defaults OUTSIDE the project (e.g.
#     /root/.local/share/pnpm/store). node_modules/.pnpm hard-links into it.
#   - App/workspace node_modules entries are symlinks into
#     node_modules/.pnpm or into packages/* (workspace:*).
#   - Copying only /app leaves store-side links broken on the runner.
#   Fix: pin the store to /pnpm/store, copy that path into the runner
#   unchanged, and verify no dangling symlinks before shipping.
#
# Runtime keeps the full workspace tree because Next is not configured with
# `output: "standalone"` and reads registry/styles/examples/content/fonts/
# calendar from disk.

# -----------------------------------------------------------------------------
# Builder
# -----------------------------------------------------------------------------
FROM node:22-bookworm-slim AS builder

ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
# Pin store to a stable absolute path that we can COPY into the runner.
ENV npm_config_store_dir=/pnpm/store
ENV CI=true
ENV NEXT_TELEMETRY_DISABLED=1
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates curl unzip findutils \
  && rm -rf /var/lib/apt/lists/* \
  && corepack enable \
  && corepack prepare pnpm@10.33.4 --activate \
  && curl -fsSL https://bun.sh/install | bash \
  && ln -sf /root/.bun/bin/bun /usr/local/bin/bun \
  && mkdir -p /pnpm/store

WORKDIR /app

COPY . .

RUN pnpm install --frozen-lockfile --store-dir /pnpm/store

# Record store path + classify symlink targets (workspace vs store vs other).
RUN set -eux; \
  store="$(pnpm store path)"; \
  echo "pnpm store path: ${store}"; \
  case "${store}" in \
    /pnpm/store|/pnpm/store/*) ;; \
    *) echo "Unexpected pnpm store path: ${store} (expected under /pnpm/store)" >&2; exit 1 ;; \
  esac; \
  test -d /pnpm/store; \
  echo "=== absolute symlink targets under /app ==="; \
  abs_report="$(mktemp)"; \
  find /app -type l -print0 \
    | while IFS= read -r -d '' link; do \
        target="$(readlink -n "$link" || true)"; \
        case "$target" in \
          /*) \
            case "$target" in \
              /app|/app/*) echo "APP    $link -> $target" ;; \
              /pnpm/store|/pnpm/store/*) echo "STORE  $link -> $target" ;; \
              *) echo "EXTERNAL $link -> $target" ;; \
            esac \
            ;; \
        esac; \
      done | tee "${abs_report}"; \
  if grep -q '^EXTERNAL ' "${abs_report}"; then \
    echo "Found symlinks pointing outside /app and /pnpm/store" >&2; \
    exit 1; \
  fi; \
  rm -f "${abs_report}"; \
  echo "=== workspace package links ==="; \
  for p in \
      apps/v4/node_modules/farsiui \
      apps/v4/node_modules/@farsiui/react \
      apps/v4/node_modules/@farsiui/helpers \
      packages/tests/node_modules/farsiui \
    ; do \
      if [ -L "$p" ] || [ -e "$p" ]; then \
        echo "$p -> $(readlink -n "$p" 2>/dev/null || echo '(not a symlink)')"; \
      else \
        echo "$p (absent)"; \
      fi; \
    done; \
  echo "=== dangling symlinks under /app (must be empty) ==="; \
  dangling="$(find /app -type l ! -exec test -e {} \; -print)"; \
  if [ -n "$dangling" ]; then \
    echo "$dangling" >&2; \
    exit 1; \
  fi

ENV NODE_OPTIONS=--max-old-space-size=6144

RUN pnpm turbo run build --filter=v4 --concurrency=1

# Drop turbo / Next build caches from the tree copied into the runner.
RUN rm -rf /app/.turbo /app/apps/v4/.turbo /app/packages/*/.turbo \
  && rm -rf /app/apps/v4/.next/cache

# Re-check links after build (workspace dist paths must resolve).
# Runtime smoke: resolve Next + workspace packages without reinstall.
RUN set -eux; \
  dangling="$(find /app -type l ! -exec test -e {} \; -print)"; \
  if [ -n "$dangling" ]; then \
    echo "Dangling symlinks after build:" >&2; \
    echo "$dangling" >&2; \
    exit 1; \
  fi; \
  test -f /app/apps/v4/.next/BUILD_ID; \
  test -d /pnpm/store; \
  pnpm --filter=v4 exec node -e "require('next/package.json'); require('farsiui/package.json');"

# -----------------------------------------------------------------------------
# Runner — production only (no Bun, no apt build deps)
# -----------------------------------------------------------------------------
FROM node:22-bookworm-slim AS runner

ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
ENV npm_config_store_dir=/pnpm/store
ENV CI=true
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
ENV PORT=4000
ENV HOSTNAME=0.0.0.0

RUN apt-get update \
  && apt-get install -y --no-install-recommends findutils \
  && rm -rf /var/lib/apt/lists/* \
  && corepack enable \
  && corepack prepare pnpm@10.33.4 --activate \
  && mkdir -p /pnpm/store

WORKDIR /app

# Preserve absolute symlink/hardlink targets: store first, then app tree.
COPY --from=builder /pnpm/store /pnpm/store
COPY --from=builder /app /app

# Fail the image build if any node_modules / workspace link broke in transit.
# Ensure start script is visible without install/build.
RUN set -eux; \
  store="$(pnpm store path)"; \
  echo "runner pnpm store path: ${store}"; \
  dangling="$(find /app -type l ! -exec test -e {} \; -print)"; \
  if [ -n "$dangling" ]; then \
    echo "Dangling symlinks in runner image:" >&2; \
    echo "$dangling" >&2; \
    exit 1; \
  fi; \
  test -f /app/apps/v4/.next/BUILD_ID; \
  pnpm --filter=v4 exec node -e "require('next/package.json'); require('farsiui/package.json');"; \
  pnpm --filter=v4 exec node -e "const p=require('./package.json'); if(!p.scripts||!p.scripts.start) process.exit(1);"

EXPOSE 4000

CMD ["pnpm", "--filter=v4", "start"]
