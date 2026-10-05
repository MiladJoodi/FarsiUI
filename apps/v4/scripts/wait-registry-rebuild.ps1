for ($i = 0; $i -lt 45; $i++) {
  Start-Sleep -Seconds 15
  try {
    $fs = [IO.File]::Open(
      "I:\Github\new\FarsiUI\apps\v4\scripts\registry-rebuild-khesht.log",
      "Open",
      "Read",
      "ReadWrite"
    )
    $sr = New-Object IO.StreamReader($fs, [Text.Encoding]::Unicode)
    $c = $sr.ReadToEnd()
    $sr.Close()
    $fs.Close()
    if (
      $c.Contains("REGISTRY_DONE") -or
      $c.Contains("Build complete") -or
      $c.Contains("error TS")
    ) {
      Write-Host ("FIN i=" + $i)
      Write-Host $c.Substring([Math]::Max(0, $c.Length - 1000))
      break
    }
    Write-Host ("wait " + $i + " len=" + $c.Length)
  } catch {
    Write-Host ("locked " + $i)
  }
}

$btn = "I:\Github\new\FarsiUI\apps\v4\public\r\styles\base-khesht\button.json"
if (Test-Path $btn) {
  $j = Get-Content $btn -Raw
  Write-Host ("has_active_transform=" + $j.Contains("active:[transform:var(--press)]"))
  Write-Host ("mtime=" + (Get-Item $btn).LastWriteTime)
}
