/// <reference types="cypress" />

describe('Understand How to Automate Frames & Child windowns in Cypress', function()
{ 
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

    // it will work for the same domain
    it('Handling Child windows using Cypress',function() {   
        cy.get('#opentab').then(function(el)
        {
            const url=el.prop('href')
            cy.visit(url) // to check the windown that opened
        })
    }) 

    // Frame = html embeded
    it('Handling Frames',function() {   
        // focus on iframe
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find("h1[class*='princing-title']").should('have-length', 2)
    })

})