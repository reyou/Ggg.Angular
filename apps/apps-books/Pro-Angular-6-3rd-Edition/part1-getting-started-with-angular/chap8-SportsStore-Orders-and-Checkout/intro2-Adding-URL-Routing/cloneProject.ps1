$source = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap8-SportsStore-Orders-and-Checkout\intro2-Adding-URL-Routing";
$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap8-SportsStore-Orders-and-Checkout\intro3-Completing-the-Cart-Detail-Feature";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse