describe('DATA TABLES', () => {
  it('passes', () => {
    cy.visit('https://practice-automation.com/tables/')
    cy.get('.container')
        .find('h1')
        .should('contain', 'Tables')
    cy.get('.entry-content').find('p').should('be.visible')

    cy.get('[class="wp-block-table"]').within(() =>{
      cy.get('td').eq(0).should('contain', 'Item')
      cy.get('td').eq(1).should('contain', 'Price')
      cy.get('tr')
            .should('contain', 'Oranges')
            .and('contain', 'Laptop')
            .and('contain', 'Marbles')
            .should('contain', '$3.99')
            .and('contain', '$1200.00')
            .and('contain', '$1.25')
    cy.get('tr').eq(1).should('contain', 'Oranges')
    cy.get('tr').eq(2).should('contain', 'Laptop')
    cy.get('tr').eq(1).should('contain', '$3.99')
    cy.get('tr').eq(2).should('contain', '$1')
    })

    cy.get('h4').contains('Sortable Table')
    cy.get('select').select('100') // Select 100 option
  })
})