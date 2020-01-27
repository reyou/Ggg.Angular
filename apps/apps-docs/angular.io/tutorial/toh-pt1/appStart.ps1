function Get-ScriptDirectory {
    Split-Path -parent $PSCommandPath
}
$currentDir = Get-ScriptDirectory
Write-Output "`n`nCurrent Directory: `n$currentDir`n`n" 
Set-Location $currentDir
Set-Location .\angular-tour-of-heroes
# npm ci
ng serve --port 3000 --open
Set-Location .\..
