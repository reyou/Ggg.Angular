$source = "C:\Github\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap2-your-first-angular-app\intro5-Preparing-the-HTML-File\";
$destination = "C:\Github\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap2-your-first-angular-app\intro6-Adding-the-To-Do-Table";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse