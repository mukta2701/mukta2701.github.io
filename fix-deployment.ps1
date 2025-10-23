# GitHub Pages Deployment Troubleshooting

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "GitHub Pages Blank Screen Fix" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Clean build
Write-Host "Step 1: Cleaning old build..." -ForegroundColor Yellow
if (Test-Path dist) {
    Remove-Item -Recurse -Force dist
    Write-Host "✓ Removed old dist folder" -ForegroundColor Green
}
if (Test-Path node_modules/.vite) {
    Remove-Item -Recurse -Force node_modules/.vite
    Write-Host "✓ Cleared Vite cache" -ForegroundColor Green
}

Write-Host ""
Write-Host "Step 2: Installing dependencies..." -ForegroundColor Yellow
npm install

Write-Host ""
Write-Host "Step 3: Building project..." -ForegroundColor Yellow
npm run build

Write-Host ""
Write-Host "Step 4: Checking build output..." -ForegroundColor Yellow
if (Test-Path dist/index.html) {
    Write-Host "✓ Build successful! dist/index.html exists" -ForegroundColor Green
    Write-Host ""
    Write-Host "Checking dist contents:" -ForegroundColor Cyan
    Get-ChildItem dist -Name
} else {
    Write-Host "✗ Build failed! dist/index.html not found" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Step 5: Testing preview..." -ForegroundColor Yellow
Write-Host "Starting preview server (Ctrl+C to stop)..." -ForegroundColor Gray
Write-Host "If the site works in preview, the issue is with GitHub Pages configuration." -ForegroundColor Gray
Write-Host ""

npm run preview
