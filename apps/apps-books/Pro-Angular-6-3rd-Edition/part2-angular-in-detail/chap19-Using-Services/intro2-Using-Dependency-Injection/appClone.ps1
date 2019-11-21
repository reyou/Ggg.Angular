# source, destination
$s = "C:\Ggg\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap19-Using-Services\intro1-Using-Services\";
$d = "C:\Ggg\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap19-Using-Services\intro2-Using-Dependency-Injection\";

# Remove-Item $d -Force -Recurse
Copy-Item $s -Destination $d -Recurse

 