# source, destination
$s = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap15-Creating-Attribute-Directives\intro2-Creating-Data-Bound-Input-Properties";
$d = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap15-Creating-Attribute-Directives\intro2-Creating-Custom-Events";

# Remove-Item $d -Force -Recurse
Copy-Item $s -Destination $d -Recurse