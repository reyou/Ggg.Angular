$source = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-web\www.youtube.com\BumgayeUC08-Angular-Testing-Quick-Start\intro1";
$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-web\www.youtube.com\BumgayeUC08-Angular-Testing-Quick-Start\intro2";

# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse
