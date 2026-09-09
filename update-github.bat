@echo off
setlocal
title Swaddhara.in - GitHub Auto Update
cd /d "C:\laragon\www\swaddhara.in"

if errorlevel 1 (
    echo ERROR: Could not open the website folder.
    exit /b 1
)

echo.
echo ==========================================
echo   Swaddhara.in - GitHub Auto Update
echo ==========================================
echo.

echo [1/3] Checking changes...
git status --short

echo.
echo [2/3] Adding changed files...
git add -A
if errorlevel 1 (
    echo ERROR: Could not stage the changes.
    exit /b 1
)

git diff --cached --quiet
if not errorlevel 1 (
    echo.
    echo No changes found. Nothing to update.
    echo.
    exit /b 0
)

echo.
echo [3/3] Committing and pushing to GitHub...
git commit -m "Update website"
if errorlevel 1 (
    echo.
    echo ERROR: Commit failed.
    exit /b 1
)

git push origin main
if errorlevel 1 (
    echo.
    echo ERROR: Push failed. Check your GitHub login/connection.
    exit /b 1
)

echo.
echo ==========================================
echo   SUCCESS! GitHub updated successfully.
echo ==========================================
echo.
exit /b 0
