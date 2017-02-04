Lets consider we are building todo application.

# Project structure

```
angular-todo-app/

---- bower.json
---- gulpfile.js
---- package.json

---- app/
-------- index.html

-------- scripts/
------------ controllers/
---------------- main.controller.js
------------ directives/
---------------- directive.js
------------ filters/
---------------- filter.js
------------ services/
---------------- service.js
------------ app.js

-------- styles/
------------ main.css

-------- views/
------------ main.html

---- tests/
-------- e2e/
------------ main.controller.spec.js
-------- unit/
------------ todo-list.directive.spec.js
-------- protractor.e2e.config.js
-------- karma.unit.config.js

---- bower_components/
-------- vendors libraries (e.g. angular libs)

---- node_modules/
-------- dev dependencies modules
```

### bower.json

`bower.json` will manage application package dependencies like angular. 

### gulpfile.js

`gulpfile.js` for automate development process.

### package.json

`package.json` for managing project version, project dependencies, dev-dependencies etc.

### app

`app/` will hold all files related to application's actual functionality.

`app/index.html` file is main entry file.

`app/scripts/` will hold all scripts files related to application. 

`app/scripts/app.js` will hold main script file for angular and this file play main role in application bootstrap.

`app/scripts/controllers/` will hold script files related to angular `controllers`.

`app/scripts/directives/` will hold script files related to angular `directives`.

`app/scripts/filters/` will hold script files related to angular `filters`.

`app/scripts/services/` will hold script files related to angular `services`.

`app/styles/` will hold all styles files related to application.

`app/views/` will hold all templates files related to application.

### tests

`tests/` will hold project's all type of tests like unit, e2e test etc.

`tests/karma.unit.config.js` configuration file for karma unit tests.

`tests/protractor.e2e.config.js` configuration file for protractor end-to-end tests.

`tests/unit/` will hold unit test related to application.

`tests/e2e/` will hold end-to-end test related to application.

### bower_components

`bower_components/` will hold all project dependencies like angular.

### node_modules

`node_modules/` will hold project's npm dependencies like gulp.

