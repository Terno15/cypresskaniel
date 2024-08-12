/// <reference types="Cypress" />
describe('Cypress Hovers', () => {
    it('Open and check hover', ()=> {
        cy.visit('https://practice-automation.com/hover/')
        cy.contains('Hover')
            .should('be.visible')
        cy.get('.entry-content')
            .find('p')
        cy.wait(1000)
        cy.get('#mouse_over')
            .trigger('mouseover')
            .screenshot()
            .should('contain', 'You did it!')
    })
})