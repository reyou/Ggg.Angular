$source = "C:\Github\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap7-SportsStore-A-Real-Application\intro1-Preparing-the-Project\";
$destination = "C:\Github\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap7-SportsStore-A-Real-Application\intro2-Adding the-CSS-Style-Sheets\";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse