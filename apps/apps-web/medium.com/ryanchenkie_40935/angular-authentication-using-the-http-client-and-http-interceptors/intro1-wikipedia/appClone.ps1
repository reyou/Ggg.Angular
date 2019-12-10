function Get-ScriptDirectory {
    Split-Path -parent $PSCommandPath
}
$currentDir = Get-ScriptDirectory
Write-Output "`n`nCurrent Directory: `n$currentDir`n`n" 
Set-Location $currentDir
Write-Output "Files in the current directory:"
Get-ChildItem $currentDir

$destination = "C:\Ggg\Ggg.Angular\apps\apps-web\medium.com\ryanchenkie_40935\angular-authentication-using-the-http-client-and-http-interceptors\intro2-wikipedia-fake-error";

# Remove-Item $d -Force -Recurse
Write-Output "Copy Started:"
Copy-Item $currentDir -Destination $destination -Recurse 
Write-Output "Copy Finished."
# Open destination with VSCode
code $destination