$source = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap7-SportsStore-A-Real-Application\intro3-Updating-the-Root-Module";
$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap7-SportsStore-A-Real-Application\intro4-Creating-a-Custom-Directive";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse