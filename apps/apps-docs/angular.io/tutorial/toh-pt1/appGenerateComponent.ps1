function Get-ScriptDirectory {
    Split-Path -parent $PSCommandPath
}
$currentDir = Get-ScriptDirectory
Write-Output "`n`nCurrent Directory: `n$currentDir`n`n" 
Set-Location $currentDir
Set-Location .\angular-tour-of-heroes
ng generate component heroes
# ng generate service cart/
Set-Location .\..

