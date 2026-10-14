# Lightweight Native PowerShell HTTP Server for Local Portfolio Preview
$port = 8080
$rootPath = $PSScriptRoot

# Check if port is in use and find an available one
while ($true) {
    $listenerTest = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
    if (-not $listenerTest) { break }
    $port++
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
try {
    $listener.Start()
} catch {
    Write-Host "Failed to start on port $port, falling back..."
    $port = 9000
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$port/")
    $listener.Start()
}

$url = "http://localhost:$port/"
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host " Harshitha - Software Engineer Portfolio Server" -ForegroundColor Green
Write-Host " Serving at: $url" -ForegroundColor Yellow
Write-Host " Press Ctrl+C in this terminal to stop the server." -ForegroundColor Gray
Write-Host "========================================================" -ForegroundColor Cyan

# Automatically open default browser
Start-Process $url

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $localPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($localPath)) { $localPath = "index.html" }

        $filePath = Join-Path $rootPath $localPath

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".json" { "application/json; charset=utf-8" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".svg"  { "image/svg+xml" }
                ".ico"  { "image/x-icon" }
                default { "application/octet-stream" }
            }

            $response.ContentType = $contentType
            $buffer = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        } else {
            $response.StatusCode = 404
            $errBuffer = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.ContentLength64 = $errBuffer.Length
            $response.OutputStream.Write($errBuffer, 0, $errBuffer.Length)
        }

        $response.OutputStream.Close()
    } catch {
        # Catch connection aborts gracefully
    }
}
