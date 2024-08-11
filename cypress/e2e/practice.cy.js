/// <reference types="Cypress" />
describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://practice-automation.com/')
    })
    afterEach(() => {
      cy.log('Running after each of my tests !')
    })
    it('Title', () => {
      cy.title().should('contain','Learn and Practice Automation | automateNow')
    })
    it('H1', () => {
        cy.get('h1').should('be.visible').and('contain', 'Welcome to your software automation practice website!')
    })
    it('Fields', () => {
        cy.contains('Form Fields').click()
    })
  })