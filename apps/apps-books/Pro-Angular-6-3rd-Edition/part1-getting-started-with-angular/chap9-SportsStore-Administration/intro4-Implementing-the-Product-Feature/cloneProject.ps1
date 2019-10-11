$source = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap9-SportsStore-Administration\intro3-Extending-the-Data-Source-and-Repositories";
$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap9-SportsStore-Administration\intro4-Implementing-the-Product-Feature";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse