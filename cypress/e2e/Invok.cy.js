/// <reference types="Cypress" />
describe('Invok', () => {
  it('Command Invok', () => {
    const getName = () => {
      return 'Jane Lane'
    }
    cy.wrap({ name: getName }).invoke('name').should('eq', 'Jane Lane') // true

    const fn = (a,b) =>{
      return a + b
     }
     cy.wrap({add:fn}).invoke('add', 10,10).should('eq', 20)
     //.invoke('add', 3,10).should('be.greaterThan', 2).and('be.lessThan', 20)
  })
})