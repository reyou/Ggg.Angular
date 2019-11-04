# source, destination
$s = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap16-Creating-Structural-Directives\intro3-Dealing-with-Collection-Level-Data-Changes";
$d = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap16-Creating-Structural-Directives\intro4-Querying-the-Host-Element-Content";
 
# Remove-Item $d -Force -Recurse
Copy-Item $s -Destination $d -Recurse