$source = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-web\www.youtube.com\PhggNGsSQyg-Learn-RxJS-in-60-Minutes\intro8-observables";
$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-web\www.youtube.com\PhggNGsSQyg-Learn-RxJS-in-60-Minutes\intro9-subjects";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse