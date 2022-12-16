/// <reference types="cypress" />

describe('Learning Alerts', function()
{ 
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })



    it('Auto handles Alerts in web Apps',function() {     
        //Check boxes
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //window:alert (pop-up)
        cy.on('window:alert',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
    
        cy.on('window:confirm',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        
        // invoke a function - HANDLING CHILD WITH COMBINATION OF CYPRESS & JQUERY
        cy.get('#opentab').invoke('removeAttr','target').click()
        
        cy.url().should('include','rahulshettyacademy')
        
        // Navigating browser control using Cypress
        cy.go('back')
        
    }) 

    it('Handling web tables using each command',function() {
            
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
            
            const text=$e1.text()
            if(text.includes("Python"))
            {
            
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                    const priceText=   price.text()
                    expect(priceText).to.equal('25')
                })
            }
            
        })
        
    })
    
    // mouse hover events are not supported in cypress. Alternatively use jquery or force click
    it('Handling Mouse hover popus using Cypress with jquery',function() {
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')
    })

    it('Handling Mouse hover popus using force click',function() {
        cy.contains('Top').click({force:true})
        cy.url().should('include', 'top')
    })

})