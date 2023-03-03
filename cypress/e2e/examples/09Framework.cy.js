/// <reference types="cypress" />

describe('Cypress Framework - Fixtures and Custom commands', function()
{ 
    let profile;

    before(function() {
        cy.fixture('profile').then(function(data)
        {
            profile=data
        })
    })

    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
    })

    
    it('Test building',function() {   
        cy.get('input[name="name"]:nth-child(2)').type("Bob") // will write Bob in both fields
        cy.get('select').select("Female")
    }) 

    it('Fixtures work in driving data',function() {   
        cy.get('input[name="name"]:nth-child(2)').type(profile.name) // will write Bob in both fields
        cy.get('select').select(profile.gender)
    }) 

    it('Validation attribute properties and their behaviour with cypress assertions',function() {   
        cy.get('input[name="name"]:nth-child(2)').type(profile.name) // will write Bob in both fields
        cy.get('select').select(profile.gender)

        // Checking if when I complete the name field then in the last field the name will appear too
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', profile.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')

         
    }) 

    it('Building customized cypress commands for reusing the code',function() {   
        cy.get(':nth-child(2) > .nav-link').click()
        cy.selectProduct("BlackBerry") // method created in support/commands.js
    }) 

})

/**
 * https://stackoverflow.com/questions/70929268/cypress-fixtures-cannot-read-properties-of-undefined-reading-data
 * first had the same issue that appears on this URL
 */