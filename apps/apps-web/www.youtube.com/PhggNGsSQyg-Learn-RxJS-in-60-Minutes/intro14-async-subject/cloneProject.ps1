$source = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-web\www.youtube.com\PhggNGsSQyg-Learn-RxJS-in-60-Minutes\intro14-async-subject";
$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-web\www.youtube.com\PhggNGsSQyg-Learn-RxJS-in-60-Minutes\intro15-operators";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse