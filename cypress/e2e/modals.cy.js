/// <reference types="Cypress" />
describe('Cypress Modals', () => {
    it('Open And Assert Modal', ()=> {
        cy.visit('https://practice-automation.com/modals/')
        cy.contains('Click to see a simple modal.').should('be.visible')
        cy.get('p').should('contain', 'Click to see a simple modal.')
    })
    ///Open the simple modal
    it('click on the simple modal', () => {
        //cy.get('#simpleModal').should('contain', 'Simple Modal').click()
        cy.contains('Simple Modal').click()

    })
})