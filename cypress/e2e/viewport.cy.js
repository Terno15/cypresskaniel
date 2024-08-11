describe('Cypress hover', () => {
  it('Lets tests hover workaround', () => {
    cy.viewport('macbook-15') // Set viewport to 550px x 750px
    //cy.viewport('samsung-s10') // Set viewport to 375px x 667px
    //cy.viewport('iphone-5') // viewport will change to 414px x 736px
    cy.visit('https://example.cypress.io')
  })
})