/// <reference types="Cypress" />
describe('Cypress files', () => {
    it('Read and write into JSON files', () => {
      cy.visit('https://example.com/')
      cy.writeFile('test-data/data.json', {name: 'Thierno', email:'toto@gmail.com'})
      cy.readFile('test-data/menu.json')

      cy.readFile('test-data/data.json').then((user) =>{
        expect(user.name).to.equal('Thierno')
        expect(user.email).to.equal('toto@gmail.com')
      })
    })
      it('Ecrire dans un texte vide', () =>{
        cy.writeFile('test-data/plain.txt', 'Hello world Cypress Community', 'ascii')
      
      }) 
  })