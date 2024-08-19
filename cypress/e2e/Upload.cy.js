/// <reference types="Cypress" />
describe('Upload files in cypress', () => {
  it('Should upload JSON example file', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').selectFile('cypress/fixtures/obama.jpg')
    cy.get('#file-submit').click()
    cy.get('.example').find('h3').should('contain', 'File Uploaded!')
  })
})