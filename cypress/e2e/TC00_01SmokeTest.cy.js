/// <reference types="Cypress" />
describe('SmokeTest', () => {
  it('Should load home Page', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('.navbar-brand')
    .should('be.visible')
    cy.get('#navbarExample')
    .should('be.visible')
    .find('#signin2')
    .should('be.visible')
    .click()

    cy.get('.modal-footer').within(() => {
      cy.get('button')
        .should('be.visible')
    });
    
    
    

    // cy.get('.modal-footer')
    // .find('[class="btn btn-secondary"]')
    // .should('contain', 'Close')
    // .click()
  })
})