@echo off
powershell -Command "$port= new-Object System.IO.Ports.SerialPort('COM8', 115200, 'None', 8, 'One'); $port.Open(); $port.Write([byte[]]0x02, 0, 1); $port.Write('+08003010001005'); $port.Write([byte[]]0x0D, 0, 1); $port.Write([byte[]]0x2E, 0, 1); $port.Close();"
