/// <reference types="Cypress" />
describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://example.com/')
    })
    afterEach(() =>{
      cy.log('Running after each of my tests !')
    })
    it.skip('A ne pas exécuter', () => {
      cy.url().should('contain', 'example.com/') /// doit contenir l'élément (.skip va tourner tous les tests sauf celui-là alors que .only ne va tourner que celui-là)
      cy.url().should('eq', 'https://example.com/') ////Ici c'est égale
    })
    it('Assert', () =>{
      cy.title().should('contain','Example Domain')
      cy.get('h1').should('be.visible')
      cy.wait(2000)
      cy.get('p').should('be.visible')
    })
  
  it ('Reload and logs', () =>{
      cy.title().should('contain','Example Domain')
      cy.log('Before Reload')
      cy.reload()
      cy.log('After Reload')
    })
  })