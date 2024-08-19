/// <reference types="Cypress" />
describe('Scroll in cypress', () => {
  it('Scrolling into footer view', () => {
    cy.visit('https://practice-automation.com/')
    cy.get('footer').scrollIntoView()
  })
})