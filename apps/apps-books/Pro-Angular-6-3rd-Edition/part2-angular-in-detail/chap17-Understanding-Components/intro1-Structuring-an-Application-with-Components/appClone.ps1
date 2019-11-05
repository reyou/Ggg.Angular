# source, destination
$s = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap17-Understanding-Components\intro1-Structuring-an-Application-with-Components";
$d = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap17-Understanding-Components\intro2-Using-Output-Properties";

 
# Remove-Item $d -Force -Recurse
Copy-Item $s -Destination $d -Recurse