$source = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-web\www.youtube.com\PhggNGsSQyg-Learn-RxJS-in-60-Minutes\intro15-operators";
$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-web\www.youtube.com\PhggNGsSQyg-Learn-RxJS-in-60-Minutes\intro16-operators-map";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse