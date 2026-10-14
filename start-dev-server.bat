@echo off
title Harshitha Portfolio - Local Dev Server
echo ========================================================
echo    Starting Local Development Server for Portfolio...
echo ========================================================
echo.
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
