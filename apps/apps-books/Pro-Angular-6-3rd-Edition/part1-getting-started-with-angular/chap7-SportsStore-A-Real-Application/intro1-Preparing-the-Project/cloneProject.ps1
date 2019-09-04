$source = "C:\Github\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap6-JavaScript-and-TypeScript-Part-2\intro1-Preparing-the-Example-Project\";
$destination = "C:\Github\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap7-SportsStore-A-Real-Application\intro1-Preparing-the-Project\";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse