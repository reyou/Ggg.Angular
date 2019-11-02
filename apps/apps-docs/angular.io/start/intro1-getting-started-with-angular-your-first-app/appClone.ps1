# source, destination
$s = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-docs\angular.io\start\intro1";
$d = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-docs\angular.io\start\intro2";

# Remove-Item $d -Force -Recurse
Copy-Item $s -Destination $d -Recurse