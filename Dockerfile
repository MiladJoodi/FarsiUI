# Paasta / Docker production image for the FarsiUI docs app (apps/v4).
# Build context MUST be the monorepo root (not apps/v4) so pnpm workspaces work.
#
# Full source is copied before install: apps/v4 postinstall (fumadocs-mdx)
# needs source.config.ts, and Paasta may rewrite the install RUN without
# --ignore-scripts.
FROM node:22-bookworm-slim AS base

ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
ENV CI=true
ENV NEXT_TELEMETRY_DISABLED=1
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates curl unzip \
  && rm -rf /var/lib/apt/lists/* \
  && corepack enable \
  && corepack prepare pnpm@10.33.4 --activate \
  && curl -fsSL https://bun.sh/install | bash \
  && ln -sf /root/.bun/bin/bun /usr/local/bin/bun

WORKDIR /app

COPY . .

RUN pnpm install --frozen-lockfile

ENV NODE_OPTIONS=--max-old-space-size=6144

RUN pnpm turbo run build --filter=v4 --concurrency=1

ENV PORT=4000
ENV HOSTNAME=0.0.0.0
EXPOSE 4000

CMD ["pnpm", "--filter=v4", "start"]
