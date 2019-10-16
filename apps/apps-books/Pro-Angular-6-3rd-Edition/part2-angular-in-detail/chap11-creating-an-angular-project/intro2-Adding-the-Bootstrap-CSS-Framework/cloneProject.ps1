$source = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap11-creating-an-angular-project\intro1-creating-a-new-angular-project";
$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap11-creating-an-angular-project\intro2-Adding-the-Bootstrap-CSS-Framework";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse