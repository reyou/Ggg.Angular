$source = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap11-creating-an-angular-project\intro2-Adding-the-Bootstrap-CSS-Framework";
$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap12-Using-Data-Bindings\intro1-One-Way-Data-Bindings";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse