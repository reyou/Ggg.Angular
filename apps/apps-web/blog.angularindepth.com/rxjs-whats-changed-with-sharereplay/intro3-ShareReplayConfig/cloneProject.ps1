$source = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-web\blog.angularindepth.com\rxjs-whats-changed-with-sharereplay\intro2-interval";
$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-web\blog.angularindepth.com\rxjs-whats-changed-with-sharereplay\intro3-ShareReplayConfig";


# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse