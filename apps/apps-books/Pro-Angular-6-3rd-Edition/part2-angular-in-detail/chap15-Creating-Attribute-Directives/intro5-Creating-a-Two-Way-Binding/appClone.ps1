# source, destination
$s = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap15-Creating-Attribute-Directives\intro5-Creating-a-Two-Way-Binding";
$d = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap16-Creating-Structural-Directives\intro1-Creating-a-Simple-Structural-Directive";

# Remove-Item $d -Force -Recurse
Copy-Item $s -Destination $d -Recurse