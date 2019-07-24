$source = "C:\Github\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap2-your-first-angular-app\intro2-Creating-the-Project";
$destination = "C:\Github\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part1-getting-started-with-angular\chap2-your-first-angular-app\intro3-Adding-the-Bootstrap";

Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse