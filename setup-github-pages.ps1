# 🚀 GitHub Pages Deployment - Quick Setup

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   GitHub Pages Deployment Setup" -ForegroundColor Cyan
Write-Host "   Mukta Choudhury Portfolio" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
Write-Host "Checking Git installation..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "✓ Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Git is not installed. Please install Git from https://git-scm.com/" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "IMPORTANT: Repository Name Decision" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Choose your GitHub repository name:" -ForegroundColor Yellow
Write-Host ""
Write-Host "Option 1: username.github.io" -ForegroundColor Green
Write-Host "  → Your site will be at: https://username.github.io/" -ForegroundColor Gray
Write-Host "  → Use this for your MAIN portfolio site" -ForegroundColor Gray
Write-Host "  → Keep vite.config.js base as '/'" -ForegroundColor Gray
Write-Host ""
Write-Host "Option 2: portfolio (or any other name)" -ForegroundColor Green
Write-Host "  → Your site will be at: https://username.github.io/portfolio/" -ForegroundColor Gray
Write-Host "  → Use this if you want multiple project sites" -ForegroundColor Gray
Write-Host "  → Need to change vite.config.js base to '/portfolio/'" -ForegroundColor Gray
Write-Host ""

$repoChoice = Read-Host "Which option? Enter '1' for username.github.io or '2' for project name"

if ($repoChoice -eq "1") {
    Write-Host ""
    $username = Read-Host "Enter your GitHub username"
    $repoName = "$username.github.io"
    $basePath = "/"
    Write-Host "✓ Repository will be: $repoName" -ForegroundColor Green
    Write-Host "✓ Site URL will be: https://$repoName/" -ForegroundColor Green
    Write-Host "✓ Base path is already set correctly: /" -ForegroundColor Green
} elseif ($repoChoice -eq "2") {
    Write-Host ""
    $username = Read-Host "Enter your GitHub username"
    $repoName = Read-Host "Enter your repository name (e.g., portfolio, MyPortfolio)"
    $basePath = "/$repoName/"
    Write-Host "✓ Repository will be: $repoName" -ForegroundColor Green
    Write-Host "✓ Site URL will be: https://$username.github.io/$repoName/" -ForegroundColor Green
    Write-Host ""
    Write-Host "⚠ IMPORTANT: You need to update vite.config.js" -ForegroundColor Yellow
    Write-Host "Change the 'base' property to: '$basePath'" -ForegroundColor Yellow
} else {
    Write-Host "Invalid choice. Exiting..." -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Create a NEW repository on GitHub:" -ForegroundColor Yellow
Write-Host "   → Go to: https://github.com/new" -ForegroundColor Gray
Write-Host "   → Name: $repoName" -ForegroundColor Gray
Write-Host "   → Visibility: Public" -ForegroundColor Gray
Write-Host "   → DO NOT initialize with README" -ForegroundColor Gray
Write-Host ""
Write-Host "2. After creating the repo, run these commands:" -ForegroundColor Yellow
Write-Host ""
Write-Host "   git init" -ForegroundColor Cyan
Write-Host "   git add ." -ForegroundColor Cyan
Write-Host "   git commit -m `"Initial commit: Mukta Choudhury Portfolio`"" -ForegroundColor Cyan
Write-Host "   git branch -M main" -ForegroundColor Cyan
Write-Host "   git remote add origin https://github.com/$username/$repoName.git" -ForegroundColor Cyan
Write-Host "   git push -u origin main" -ForegroundColor Cyan
Write-Host ""
Write-Host "3. Enable GitHub Pages:" -ForegroundColor Yellow
Write-Host "   → Go to: https://github.com/$username/$repoName/settings/pages" -ForegroundColor Gray
Write-Host "   → Source: Select 'GitHub Actions'" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Wait 2-3 minutes for deployment" -ForegroundColor Yellow
Write-Host ""
Write-Host "5. Visit your live site:" -ForegroundColor Yellow
if ($repoChoice -eq "1") {
    Write-Host "   → https://$repoName/" -ForegroundColor Green
} else {
    Write-Host "   → https://$username.github.io/$repoName/" -ForegroundColor Green
}
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "📖 For detailed instructions, see:" -ForegroundColor Cyan
Write-Host "   DEPLOYMENT_GUIDE.md" -ForegroundColor Gray
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Ready to deploy! 🚀🛡️" -ForegroundColor Green
Write-Host ""
