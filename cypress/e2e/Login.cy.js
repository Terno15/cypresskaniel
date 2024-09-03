/// <reference types="Cypress" />
describe('Login into a form', () => {

  it('Should login and Log out from the application', () => {
    cy.visit('https://www.demoblaze.com/')
  cy.get('#navbarExample')
    .find('[class="navbar-nav ml-auto"]')
    .find('.nav-item')
    .find('#login2')
    .should('be.visible')
    .click()
    cy.get('#loginusername').type('test', { force: true })
    cy.get('#loginpassword').type('test', { force: true })
  cy.get('[class="btn btn-primary"]').contains('Log in').click()
  cy.get('#nameofuser').should('contain', 'Welcome test')
  })
})