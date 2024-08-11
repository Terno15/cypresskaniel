/// <reference types="Cypress" />
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.com/')
    cy.url().should('contain', 'example.com/') /// doit contenir l'élément
    cy.url().should('eq', 'https://example.com/') ////Ici c'est égale
  })

  it ('Assert', () =>{
    cy.visit('https://example.com/')
    cy.title().should('contain','Example Domain')
    cy.get('h1').should('be.visible')
    cy.wait(2000)
    cy.get('p').should('be.visible')
  })

it ('Reload and logs', () =>{
    cy.visit('https://example.com/')
    cy.title().should('contain','Example Domain')
    cy.log('Before Reload')
    cy.reload()
    cy.log('After Reload')
  })
})