$ErrorActionPreference = 'Stop'
$appRoot = Split-Path -Parent $PSScriptRoot
$appUrl = 'http://127.0.0.1:4173'
function Test-TamNang {
  try { return ((Invoke-RestMethod -Uri "$appUrl/__tam_nang_health" -TimeoutSec 2).app -eq 'tam-nang') }
  catch { return $false }
}
try {
  if (-not (Test-TamNang)) {
    $nodeCommand = Get-Command node.exe -ErrorAction SilentlyContinue
    if ($nodeCommand) { $nodePath = $nodeCommand.Source }
    else { $nodePath = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' }
    if (-not (Test-Path -LiteralPath $nodePath)) { throw 'Khong tim thay Node.js. Hay cai Node.js 22.12+ roi thu lai.' }
    if (-not (Test-Path -LiteralPath (Join-Path $appRoot 'dist\index.html'))) { throw 'Chua co ban build. Hay chay pnpm install va pnpm build trong thu muc app.' }
    $servePath = Join-Path $PSScriptRoot 'serve.mjs'
    $process = Start-Process -FilePath $nodePath -ArgumentList ('"' + $servePath + '"') -WorkingDirectory $appRoot -WindowStyle Hidden -PassThru
    for ($attempt = 0; $attempt -lt 30; $attempt++) {
      if (Test-TamNang) { break }
      if ($process.HasExited) { throw 'Khong khoi dong duoc app. Cong 4173 co the dang duoc ung dung khac su dung.' }
      Start-Sleep -Milliseconds 200
    }
    if (-not (Test-TamNang)) { throw 'App chua san sang. Thu chay node scripts/serve.mjs de xem loi.' }
  }
  Start-Process $appUrl
} catch { Write-Host $_.Exception.Message -ForegroundColor Red; exit 1 }
