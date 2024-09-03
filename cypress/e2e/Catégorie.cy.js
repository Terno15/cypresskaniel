/// <reference types="Cypress" />
describe('Porducts Details', () => {

    it('Should select products', () => {
      cy.visit('https://www.demoblaze.com/index.html')
      cy.get('h4').contains('Nexus 6').click()

      cy.get('#tbodyid').within((element) =>{
        cy.get('.name').contains('Nexus 6').should('be.visible')
        cy.get('.price-container').should('contain', "$650").should('be.visible')
        cy.get('small').should('contain', '*includes tax').should('be.visible')
        cy.get('#myTabContent').find('#more-information').contains('Product description').should('be.visible')
        cy.get('#myTabContent').find('#more-information').find('p').should('be.visible')
       // cy.get('#more-information').contains('Product desccription').should('be.visible')
        //cy.get('#myTabContent').find('p').and('include', 'The Motorola Google Nexus 6 is')
      })
    })
})
