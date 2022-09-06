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
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('clicked')
        }) // eq means get by index
    })

    it('Grabbing the text for validations using cypress text', function(){
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        // parent child chaining
        cy.get('.products').as('productLocator')

        // https://docs.cypress.io/api/commands/each#DOM-Elements
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()    
            }
        })

        // go to shop card
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        
    })

    it('Handing Async promisses', function(){
        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')
    })

})