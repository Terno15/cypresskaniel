/// <reference types="Cypress" />
describe('Cypress Custom commands', () => {
  it('Using cypress custom commands as function', () => {
    cy.visit('https://practice-automation.com/form-fields/')
    cy.getByClass('entry-content').find('p') ////GetByClass remplace tous les points. ça t'évite de mettre le point à chaque fois, mais juste le texte
    .should('contain', 'Filling out a web form is one of the most fundamental things to learn as you begin your automation journey. You can use the following form to practice ')
   cy.getById('name-input').should('be.empty')
    //cy.get('input').last().focus() // Focus on the first input
    //cy.get('[data-cy="name-input"]').should('be.NaN')
    cy.get('input#name-input').type('Thierno')
    cy.wait(1000)
    // cy.get('[data-cy="name-input"]').type('Thierno')
    cy.get('[data-cy="name-input"]').clear()
    cy.get('input#name-input').type('Binta')
    cy.get('[data-cy="name-input"]').should('not.be.NaN')
    cy.get('[data-cy="name-input"]').clear()
    cy.get('input').not('#name-input')
    cy.focused() // Yields the element currently in focus
   


  })
})