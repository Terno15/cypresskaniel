class ExamplePage{
    openExemplePage(){
        cy.visit('https://example.com:')
    }

    assertUrl(){
        cy.url().should('contain', 'example.com')
    }

    assertTitle(){
        cy.title().should('contain', 'Example Domain')
    }

    AnotherOne(){
        cy.get('h1').should('be.visible')
        cy.wait(2000)
        cy.get('p').should('be.visible')
    }


}

export default ExamplePage