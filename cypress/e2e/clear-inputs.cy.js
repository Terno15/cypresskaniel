/// <reference types="Cypress" />
describe('Cypress Clearing Inputs', () => {
  it('Type and Clear', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('12345678910')
    cy.wait(1000)
    cy.getById('username').clear()
    cy.wait(1000)
    cy.getById('username').type('Thierno')
    cy.getById('password').type('password')
    cy.getByClass('radius').contains('Login').should('be.visible').click()
    cy.contains('Your username is invalid!').should('be.visible') //tomsmith//SuperSecretPassword!
    cy.wait(1000)
    cy.getById('username').clear()
    cy.get('#username').type('tomsmith')
    cy.getById('password').clear()
    cy.getById('password').type('SuperSecretPassword!')
    cy.contains('Login').click()
    cy.getByClass('radius').contains('Login').should('be.visible').click()
    cy.contains('You logged into a secure area!').should('be.visible')
    
  })
})