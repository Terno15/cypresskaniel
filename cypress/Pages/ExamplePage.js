class ExamplePage{
    openExemplePage(){
        cy.visit('/')
    }
    assertUrl(){
        const baseUrl = Cypress.config('baseUrl')
        cy.url().should('contain', `${baseUrl}`)
    }

    assertTitle(){
        cy.title().should('contain', 'Example Domain')
    }

    AnotherOne(){
        cy.get('h1').should('be.visible')
        cy.wait(1000)
        cy.get('p').should('be.visible')
    }


}

export default ExamplePage