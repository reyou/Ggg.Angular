This folder will contain the functionality for administration.

A dynamically loaded module must be self-contained and include all the information that Angular
requires, including the routing URLs that are supported and the components they display. If any other part
of the application depends on the module, then it will be included in the JavaScript bundle with the rest of
the application code, which means that all users will have to download code and resources for features they
won’t use.

However, a dynamically loaded module is allowed to declare dependencies on the main part of the
application. This module relies on the functionality in the data model module, which has been added to the
module’s imports so that components can access the model classes and the repositories.
