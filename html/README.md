Lets consider we are building todo application.

# Project structure

todo-app/
app/
---- index.html
---- vendors/
-------- jquery.js
---- resources/
-------- styles/
------------ main.css
------------ images/
---------------- background.jpg
-------- data/
------------ programming-languages.json
-------- images/
------------ site-logo.jpg
-------- js/
------------ main.js

### index.html

index.html file is main entry file which is root file in an html project. If no file is specified as root file explicitly then index.html always treat as root/main entry file in a html project.

### Vendors

vendors folder is for libraries and general-purpose files.

### Resources

`styles/` => styles folder will hold all your custom stylesheet files.

`styles/images/` => images folder will hold images used in stylesheet.

`data/` => data folder will hold project custom data files e.g. .json, .xml, .csv, .txt files.

`images/` => images folder will hold images which are used directly in `.html` file of application.

`js/` => js folder will hold custom javascript files.

