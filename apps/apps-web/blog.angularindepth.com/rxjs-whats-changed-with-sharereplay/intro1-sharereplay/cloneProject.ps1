$source = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-web\blog.angularindepth.com\rxjs-whats-changed-with-sharereplay\intro1-sharereplay";
$destination = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-web\blog.angularindepth.com\rxjs-whats-changed-with-sharereplay\intro2-interval";


# Remove-Item $destination -Force -Recurse
Copy-Item $source -Destination $destination -Recurse