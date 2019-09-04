$source = "C:\Github\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap4-an-html-and-css-primer\intro4-Creating-Responsive-Grids\";
$destination = "C:\Github\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap4-an-html-and-css-primer\intro5-Creating-a-Simplified-Grid-Layout\";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse