/// <reference types="Cypress" />
describe('Cypress Custom commands', () => {
  it('Using cypress custom commands as function', () => {
    cy.visit('https://practice-automation.com/form-fields/')
    cy.getByClass('entry-content').find('p') ////GetByClass remplace tous les points. ça t'évite de mettre le point à chaque fois, mais juste le texte
    .should('contain', 'Filling out a web form is one of the most fundamental things to learn as you begin your automation journey. You can use the following form to practice ')
    cy.getById('name-input').should('be.empty')
  })
  
})