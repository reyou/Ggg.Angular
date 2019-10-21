$source = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap12-Using-Data-Bindings\intro1-One-Way-Data-Bindings";
$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap13-Using-the-Built-in-Directives\intro1-Built-in-Directives";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse