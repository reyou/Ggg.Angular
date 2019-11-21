# source, destination
$s = "C:\Ggg\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap18-Using-and-Creating-Pipes\intro2-Using-the-Built-in-Pipes\";
$d = "C:\Ggg\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap19-Using-Services\intro1-Using-Services\";

# Remove-Item $d -Force -Recurse
Copy-Item $s -Destination $d -Recurse

 