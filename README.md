# Cypress
To learn and study cypress

## Setting Environment

Npm –version 8.1.2 

Project folder 

> npm –i init 

> npm install cypress –save-dev  

This will generate some files and folders 

> node_modules/.bin/cypress open 

To run all tests without open a browser (default browser eletron): 

> ./node_modules/.bin/cypress run 

To run all tests opening a browser to see the execution: 

> ./node_modules/.bin/cypress run –headed 

To run all tests to select other browser and see the execution: 

> ./node_modules/.bin/cypress run –browser <browser_name> 

Will open a window, E2E tests > continue > select the browser. To add the first test, create new folder "integration" inside cypress folder, inside this create "examples", inside this create .js files that will conten the tests. 

*On cypress.config.js (automatic generated) should be where are the tests*

To start the test cases in Test.js file you should create a describe, with the test suite. One describe could have more than one it(), each "it" have one case.

## Coding

To open a web site: 

> cy.visit("URL");

All reusable methods should be on support on commands.js, if you use this folder you didn't need make any import just call the method 
 
DefaultCommandTimeout is 4 seconds

