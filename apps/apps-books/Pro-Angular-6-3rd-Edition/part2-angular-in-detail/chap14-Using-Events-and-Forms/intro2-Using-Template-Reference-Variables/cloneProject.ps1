# source, destination
$s = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap14-Using-Events-and-Forms\intro2-Using-Template-Reference-Variables";
$d = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap14-Using-Events-and-Forms\intro3-Using-Two-Way-Data-Bindings";

# Remove-Item $d -Force -Recurse
Copy-Item $s -Destination $d -Recurse