# source, destination
$s = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap18-Using-and-Creating-Pipes\intro1-Understanding-Pipes";
$d = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap18-Using-and-Creating-Pipes\intro2-Using-the-Built-in-Pipes";

# Remove-Item $d -Force -Recurse
Copy-Item $s -Destination $d -Recurse

 