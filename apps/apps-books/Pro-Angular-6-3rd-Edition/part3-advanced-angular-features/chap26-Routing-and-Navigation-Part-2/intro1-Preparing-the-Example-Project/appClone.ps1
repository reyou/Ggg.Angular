function Get-ScriptDirectory {
    Split-Path -parent $PSCommandPath
}
$currentDir = Get-ScriptDirectory
Write-Output "`n`nCurrent Directory: `n$currentDir`n`n" 
Set-Location $currentDir
Write-Output "Files in the current directory:"
Get-ChildItem $currentDir

$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part3-advanced-angular-features\chap27-Routing-and-Navigation-Part-3\intro1-Preparing-the-Example-Project";

# Remove-Item $d -Force -Recurse
Write-Output "Copy started to destination:"
Write-Output $destination
Copy-Item $currentDir -Destination $destination -Recurse 
Write-Output "Copy finished."
# Open destination with VSCode
code $destination