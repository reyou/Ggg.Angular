# source, destination
$s = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap17-Understanding-Components\intro4-Querying-Template-Content";
$d = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-books\Pro-Angular-6-3rd-Edition\part2-angular-in-detail\chap18-Using-and-Creating-Pipes\intro1-Understanding-Pipes";

# Remove-Item $d -Force -Recurse
Copy-Item $s -Destination $d -Recurse

