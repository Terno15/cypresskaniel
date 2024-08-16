/// <reference types="Cypress" />

import ExamplePage from '../Pages/ExamplePage'

describe('Cypress E2E Testing Demo', () => {
 beforeEach(() =>{
  const examplePage = new ExamplePage()
  examplePage.openExemplePage()
 })

 afterEach(() =>{
  cy.log('Running after each of my tests')
 })

 it('Assert Url', ()=>{
  const toto = new ExamplePage()
  toto.assertUrl()
 })

 it('Assert Title', () => {
  const AssertTitle = new ExamplePage()
  AssertTitle.assertTitle()
 })

 it('Assert Element', () =>{
  cy.get('h1').should('be.visible')
  cy.wait(2000)
  cy.get('p').should('be.visible')
 })

 it('Reload and Logs', ()=>{
  cy.log('Before Reload')
  cy.reload()
  cy.log('After Reload')
 })
 
    
})