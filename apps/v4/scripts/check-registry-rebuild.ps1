$log = "I:\Github\new\FarsiUI\apps\v4\scripts\registry-rebuild-khesht.log"
$c = [IO.File]::ReadAllText($log, [Text.Encoding]::Unicode)
Write-Host ("len=" + $c.Length)
Write-Host ("done=" + $c.Contains("REGISTRY_DONE"))
Write-Host ("complete=" + $c.Contains("Build complete"))
if ($c.Length -gt 2000) { $c.Substring($c.Length - 2000) } else { $c }
$btn = "I:\Github\new\FarsiUI\apps\v4\public\r\styles\base-khesht\button.json"
if (Test-Path $btn) {
  $j = Get-Content $btn -Raw
  Write-Host ("has_active_transform=" + $j.Contains("active:[transform:var(--press)]"))
  Write-Host ("has_bare_transform_rest=" + ($j -match '(?<!active:)\[transform:var\(--press\)\]'))
}
