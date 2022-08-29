# Cypress
To learn and study cypress

## To read more

[Oficial documentation](https://docs.cypress.io/)

[Website to practice](example.cypress.io/commands/actions)

[Other website to practice](https://rahulshettyacademy.com/AutomationPractice/)

[Website to practice focus on selenium](https://rahulshettyacademy.com/seleniumPractise/#/)

[Website to practice focus on Angular](https://rahulshettyacademy.com/angularpractice/shop)

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


## Solutions

- If you had open cypress web and the test is delaying to run is better close the browser and open again.

## Coding

To open a web site: 

> cy.visit("URL");

All reusable methods should be on support on commands.js, if you use this folder you didn't need make any import just call the method 
 
DefaultCommandTimeout is 4 seconds, but you can add more time using:

> cy.wait(2000)

### Identify elements on the page 
Cypress identify the element as CSS 

| ID         | #idName                     | Note                                                                  |
|------------|-----------------------------|-----------------------------------------------------------------------|
| classname  | .classname                  | If have spaces will be replace by ifen (-), example 'seatch-keyword'  |
| tagname    | tagname#idName              |                                                                       |
|            | Tagname.classname           |                                                                       |
|            | Tagname[attribute=value]    | Input[type='search']                                                  |
|            | Tagnameparent tagnameChild  | Form input                                                            |

> cy.get('.search-keyword') 

> cy.get('.search-keyword').type('ca') // pass a string 

And when you want count how much itens is expected:

> cy.get('.product:visible').should('have.length', 4) 

To filter the visible locator:

> cy.get('locator:visible') 