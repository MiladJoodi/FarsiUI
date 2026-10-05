$ErrorActionPreference = "Continue"
$Root = "I:\Github\new\FarsiUI"
$V4 = Join-Path $Root "apps\v4"
$Log = Join-Path $V4 "scripts\ds-parity-pipeline.log"
$Utf8 = New-Object System.Text.UTF8Encoding $false

function Log([string]$msg) {
  $line = "[$(Get-Date -Format 'HH:mm:ss')] $msg"
  [System.IO.File]::AppendAllText($Log, $line + [Environment]::NewLine, $Utf8)
  Write-Host $line
}

[System.IO.File]::WriteAllText($Log, "=== DS parity pipeline start $(Get-Date) ===" + [Environment]::NewLine, $Utf8)

Set-Location $Root
Log "STEP 1: farsiui build"
& pnpm --filter=farsiui build *>> $Log 2>&1
Log "farsiui build exit=$LASTEXITCODE"

Set-Location $V4
Log "STEP 2: token extract checks"
foreach ($s in @("khesht","glass","rose","nili")) {
  Log "--- check-token-extract $s ---"
  & bun ./scripts/check-token-extract.mts $s *>> $Log 2>&1
  Log "exit=$LASTEXITCODE"
}

Set-Location $Root
Log "STEP 3: registry:build (long)"
& pnpm --filter=v4 registry:build *>> $Log 2>&1
Log "registry:build exit=$LASTEXITCODE"

Set-Location $V4
Log "STEP 4: verify-design-system-install"
& bun ./scripts/verify-design-system-install.mts *>> $Log 2>&1
Log "verify exit=$LASTEXITCODE"

Log "STEP 5: smoke-design-system-cli"
& bun ./scripts/smoke-design-system-cli.mts *>> $Log 2>&1
Log "smoke exit=$LASTEXITCODE"

Set-Location $Root
Log "STEP 6: create-style-map tests"
& pnpm --filter=farsiui test -- src/styles/create-style-map.test.ts *>> $Log 2>&1
Log "create-style-map tests exit=$LASTEXITCODE"

Log "=== DS parity pipeline done $(Get-Date) ==="
Add-Content -Path $Log -Value "PIPELINE_COMPLETE"
