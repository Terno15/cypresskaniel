/// <reference types="Cypress" />
describe('Screenshots', () => {
  it.skip('Full page screenshots', () => {
    cy.visit('https://example.com/')
    cy.screenshot('Thierno', {overwrite : true}) // Enregistrer l'image renommée en une seule fois
  })

  it('Screenshot one element', () => {
    cy.visit('https://example.com/')
    cy.get('h1').screenshot('Only h1 element', {overwrite : true})
  })
})