/// <reference types="cypress" />

describe('Accessing a shop website', function()
{
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    it('Understanding get and find commands with Cypress', function(){
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // selenium get hit url in browser, cpress get acts like findElement of selenium
        cy.get('.product:visible').should('have.length', 4) 
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click() // eq means get by index
    })

    it('Grabbing the text for validations using cypress text', function(){
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // selenium get hit url in browser, cpress get acts like findElement of selenium

        // parent child chaining
        cy.get('.products').as('productLocator')

        // https://docs.cypress.io/api/commands/each#DOM-Elements
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            $e1.find('h4.product-name').text()


        })
    })
})