# source, destination
$s = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap14-Using-Events-and-Forms\intro3-Using-Two-Way-Data-Bindings";
$d = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap14-Using-Events-and-Forms\intro4-Working-with-Forms";

# Remove-Item $d -Force -Recurse
Copy-Item $s -Destination $d -Recurse