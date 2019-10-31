# source, destination
$s = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap14-Using-Events-and-Forms\intro6-Generating-the-Elements-from-the-Model";
$d = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap15-Creating-Attribute-Directives\intro1-Creating-a-Simple-Attribute-Directive";

# Remove-Item $d -Force -Recurse
Copy-Item $s -Destination $d -Recurse