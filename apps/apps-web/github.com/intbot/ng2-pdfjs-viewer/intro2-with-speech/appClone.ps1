# source, destination
$s = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-web\github.com\intbot\ng2-pdfjs-viewer\intro1\";
$d = "D:\Git\Ggg.Github\Ggg.Angular\apps\apps-web\github.com\intbot\ng2-pdfjs-viewer\intro2-with-speech\";
# Remove-Item $d -Force -Recurse
Copy-Item $s -Destination $d -Recurse

 