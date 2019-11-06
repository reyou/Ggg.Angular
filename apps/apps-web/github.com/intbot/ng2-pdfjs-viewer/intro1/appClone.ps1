# source, destination
$s = "D:\Git\Ggg.Github\x";
$d = "D:\Git\Ggg.Github\x";

# Remove-Item $d -Force -Recurse
Copy-Item $s -Destination $d -Recurse

 