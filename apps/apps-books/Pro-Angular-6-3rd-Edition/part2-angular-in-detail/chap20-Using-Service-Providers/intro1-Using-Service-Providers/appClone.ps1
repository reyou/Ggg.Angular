function Get-ScriptDirectory {
    Split-Path -parent $PSCommandPath
}
$currentDir = Get-ScriptDirectory
Write-Output "`n`nCurrent Directory: `n$currentDir`n`n" 
Set-Location $currentDir
Write-Output "Files in the current directory:"
Get-ChildItem $currentDir

$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap20-Using-Service-Providers\intro1-Using-Service-Providers";

# Remove-Item $d -Force -Recurse
Write-Output "Copy Started:"
Copy-Item $currentDir -Destination $destination -Recurse 
Write-Output "Copy Finished."
# Open destination with VSCode
code $destination