# Run after creating empty repo at https://github.com/new?name=imageconvert
# Do NOT initialize with README, .gitignore, or license.

Set-Location $PSScriptRoot\..

if (-not (git remote get-url origin 2>$null)) {
  git remote add origin git@github.com:shengxinzhe/imageconvert.git
}

git branch -M main
git push -u origin main
Write-Host "Done: https://github.com/shengxinzhe/imageconvert"
