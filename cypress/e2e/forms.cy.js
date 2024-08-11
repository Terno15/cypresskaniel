/// <reference types="Cypress" />
describe('Forms, Buttons & Checkbox', () => {
    it('Submit And Assert form', ()=> {
        //Load the form with variable data
        const name = 'DIALLO'
        const drink = 'Water'
        const color = 'Red'
        const email = 'bhounoukoye@hotmail.com'
        const password = 'BINTA'
        const message = 'I like learning cypress automation tool'
        cy.visit('https://practice-automation.com/form-fields/')
        cy.get('#feedbackForm').should('be.visible')

         //Fill the Form
        cy.get('[data-testid="name-input"]').type(name)
        cy.get('[type="password"]').type(password)
        cy.wait(1000)
        cy.get('[data-cy="drink1"]').click()
        cy.contains(drink).click()
        cy.contains(color).click()
        cy.get('[data-cy="automation"]').select('No')
        cy.wait(1000)
        cy.get('select').select('Yes') // Select the 'user-1' option
        cy.get('[data-cy="email"]').type(email)
        cy.wait(2000)
        cy.get('[data-cy="message"]').type (message)
        cy.wait(2000)

        //Assert form Details
        cy.get('[class="custom_btn btn_hover"]')
            .should('contain', 'Submit')
            .and ('be.visible')
            .click()
    })
      
  })