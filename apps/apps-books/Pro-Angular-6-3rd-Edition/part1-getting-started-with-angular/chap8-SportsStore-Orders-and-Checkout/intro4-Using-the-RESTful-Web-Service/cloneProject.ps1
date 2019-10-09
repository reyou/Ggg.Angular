$source = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap8-SportsStore-Orders-and-Checkout\intro4-Using-the-RESTful-Web-Service";
$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap9-SportsStore-Administration\intro1-Creating-the-Module";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse