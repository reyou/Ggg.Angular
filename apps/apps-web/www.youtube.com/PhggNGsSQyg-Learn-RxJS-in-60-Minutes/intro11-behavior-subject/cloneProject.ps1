$source = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-web\www.youtube.com\PhggNGsSQyg-Learn-RxJS-in-60-Minutes\intro11-behavior-subject";
$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-web\www.youtube.com\PhggNGsSQyg-Learn-RxJS-in-60-Minutes\intro12-replay-subject";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse