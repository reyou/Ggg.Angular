$source = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap7-SportsStore-A-Real-Application\intro4-Creating-a-Custom-Directive";
$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap8-SportsStore-Orders-and-Checkout\intro1-Creating-the-Cart";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse