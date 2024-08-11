/// <reference types="Cypress" />
describe('Cypress Modals', () => {
    it('Open And Assert Modal', ()=> {
        cy.visit('https://practice-automation.com/modals/')
        cy.contains('Click to see a simple modal.').should('be.visible')
         ///Open the simple modal
        cy.get('#simpleModal').should('contain', 'Simple Modal').click()
        //cy.contains('Simple Modal').click()
        //Check the popup result
        cy.get('#pum_popup_title_1318').should('contain', 'Simple Modal')
        cy.get('[class="pum-content popmake-content"]')
            .find('p').should('be.visible')
            .and('contain', 'Hi, I’m a simple modal.')
            //Or
            .contains('Hi, I’m a simple modal.')
    })
           ///Second modaol
    it.only('Second modal form', ()=> {
        cy.visit('https://practice-automation.com/modals/')

          //Data variables
          const name = 'DIALLO'
          const email = 'tad@gmail.com'
          const message = 'I like learning cypress !'
        cy.get('button').contains('Form Modal').click()
        //cy.get('[class="popmake-674 pum-trigger"]').contains('Form Modal').should('be.visible')

        cy.get('#pum_popup_title_674').contains('Modal Containing A Form')
        cy.get('#g1051-name').type(name)
        cy.get('#g1051-email').type(email)
        cy.get('#contact-form-comment-g1051-message').type(message)
        cy.get('.contact-submit')
            .find('.pushbutton-wide')
            .should('be.visible')
            .click()
    })
    
})