$source = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap10-SportsStore-Progressive-Features-and-Deployment\intro1-Adding-Progressive-Features";
$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap10-SportsStore-Progressive-Features-and-Deployment\intro2-Preparing-for-Deployment";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse