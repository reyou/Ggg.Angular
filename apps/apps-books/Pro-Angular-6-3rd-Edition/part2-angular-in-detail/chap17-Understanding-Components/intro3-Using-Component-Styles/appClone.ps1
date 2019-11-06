# source, destination
 
$s = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap17-Understanding-Components\intro3-Using-Component-Styles";
$d = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap17-Understanding-Components\intro4-Querying-Template-Content";

 
# Remove-Item $d -Force -Recurse
Copy-Item $s -Destination $d -Recurse