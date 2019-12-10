function Get-ScriptDirectory {
    Split-Path -parent $PSCommandPath
}
$currentDir = Get-ScriptDirectory
Write-Output "`n`nCurrent Directory: `n$currentDir`n`n" 
Set-Location $currentDir
Set-Location .\example\
mv src/app/*.model.ts src/app/model/
mv src/app/limit.formvalidator.ts src/app/model/