@echo off
setlocal enabledelayedexpansion

set "segment=%1"

for /L %%i in (1,1,255) do (
    set "ip=!segment!.%%i"
    echo Sending request to IP: !ip!
    curl -s --max-time 1 "http://!ip!/ping"
)
