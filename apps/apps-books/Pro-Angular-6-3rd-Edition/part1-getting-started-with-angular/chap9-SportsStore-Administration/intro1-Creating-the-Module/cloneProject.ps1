$source = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap9-SportsStore-Administration\intro1-Creating-the-Module";
$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap9-SportsStore-Administration\intro2-Implementing-Authentication";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse