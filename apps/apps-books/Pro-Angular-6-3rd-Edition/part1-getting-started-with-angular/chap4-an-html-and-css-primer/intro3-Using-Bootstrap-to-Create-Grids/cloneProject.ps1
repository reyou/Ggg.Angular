$source = "C:\Github\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap4-an-html-and-css-primer\intro3-Using-Bootstrap-to-Create-Grids\";
$destination = "C:\Github\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap4-an-html-and-css-primer\intro4-Creating-Responsive-Grids\";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse