@echo off
title Swaddhara.in - GitHub Auto Update
cd /d "C:\laragon\www\swaddhara.in"

echo.
echo ==========================================
echo   Swaddhara.in - GitHub Auto Update
echo ==========================================
echo.

echo [1/3] Checking changes...
git status --short

echo.
echo [2/3] Adding changed files...
git add .

git diff --cached --quiet
if %errorlevel%==0 (
    echo.
    echo No changes found. Nothing to update.
    echo.
    pause
    exit /b 0
)

echo.
echo [3/3] Committing and pushing to GitHub...
git commit -m "Update website"
if errorlevel 1 (
    echo.
    echo ERROR: Commit failed.
    pause
    exit /b 1
)

git push origin main
if errorlevel 1 (
    echo.
    echo ERROR: Push failed. Check your GitHub login/connection.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   SUCCESS! GitHub updated successfully.
echo ==========================================
echo.
pause
