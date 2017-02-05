Lets consider we are building todo application.

## Project structure (by feature type)

```
angular-by-feature/

---- bower.json
---- gulpfile.js
---- package.json
---- protractor.e2e.config.js
---- karma.unit.config.js

---- app/
-------- index.html
-------- app.js

-------- common/
------------ directives/
----------------- directive.js
------------- filters/
----------------- filter.js
------------- services/
----------------- service.js
------------- styles/
----------------- main.css

-------- todo/
------------ todo-list.html
------------ todo-list.directive.js
------------ todo-list.directive.spec.js
------------ todo.filter.js
------------ todo-list.controller.js
------------ todo.service.js
------------ todo-details.html
------------ todo-details.controller.js
------------ todo-style.css

---- e2e/
-------- todo-list.controller.spec.js/

---- bower_components/
-------- vendors libraries (e.g. angular libs)

---- node_modules/
-------- dev dependencies modules
```

## Introduction
You are seeing several files and folder information. Let’s discuss them one at a time.

### Naming convention
We will be separating names with hyphen(snake-case) and will use dots to add types of file e.g.
If we want to create `todo-list` controller then we will using file name something like below.

```
todo-list.controller.js
``` 

#### bower.json

`bower.json` will manage application package dependencies like angular.

#### gulpfile.js

`gulpfile.js` for automate development process.

#### package.json

`package.json` for managing project version, project dependencies, dev-dependencies etc.

#### karma.unit.config.js

`karma.unit.config.js` configuration file for karma unit tests.

#### protractor.e2e.config.js

`protractor.e2e.config.js` configuration file for protractor end-to-end tests.

#### app

`app/` will hold all files related to application's actual functionality. It is parent folder for your todo application.

`app/index.html` file is main entry file.

`app/app.js` will hold main script file for angular and this file play main role in application bootstrap.

`app/common/` will hold files which are used through out the application or common to most part of the application.

`app/common/directives/` will hold directive files related to application.

`app/common/filters/` will hold common filters files related to application.

`app/common/services/` will hold common services files related to application.

`app/common/styles/` will hold common styles files related to application.

`app/todo/` will hold all files (scripts, templates, styles, unit tests etc) related to todo feature. In same way can create folder for other features.

#### tests

`e2e/` will hold end-to-end tests related to application.

#### bower_components

`bower_components/` will hold all project dependencies like angular.

#### node_modules

`node_modules/` will hold project's npm dependencies like gulp.

#### Where to go NEXT

- [Demo](https://github.com/pradeep1991singh/angular-testing)
