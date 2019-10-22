$source = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap13-Using-the-Built-in-Directives\intro1-Built-in-Directives";
$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap14-Using-Events-and-Forms\intro1-Using-the-Event-Binding";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse