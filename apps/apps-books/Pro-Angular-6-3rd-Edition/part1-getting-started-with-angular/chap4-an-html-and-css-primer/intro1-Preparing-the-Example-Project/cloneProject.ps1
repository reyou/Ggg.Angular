$source = "C:\Github\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap4-an-html-and-css-primer\intro1-Preparing-the-Example-Project\";
$destination = "C:\Github\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap4-an-html-and-css-primer\intro2-Using-Bootstrap-to-Create-Forms\";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse