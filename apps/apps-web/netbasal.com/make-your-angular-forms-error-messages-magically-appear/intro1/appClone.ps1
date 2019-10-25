# source, destination
$s = "C:\Ggg\Ggg.Angular\apps\apps-web\netbasal.com\make-your-angular-forms-error-messages-magically-appear\intro1";
$d = "C:\Ggg\Ggg.Angular\apps\apps-web\netbasal.com\make-your-angular-forms-error-messages-magically-appear\intro2";

# Remove-Item $d -Force -Recurse
Copy-Item $s -Destination $d -Recurse
