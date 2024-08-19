/// <reference types="Cypress" />
describe('Upload files in cypress', () => {
  it('Should upload JSON example file', () => {
    cy.visit('https://practice-automation.com/')
    cy.get('#file-upload').selectFile('')
    
  })
})