/// <reference types="cypress"/>

describe ("First Test", ()=>{

    it("Visits a page", ()=>{
        cy.visit('http://localhost:4200/')
        
        cy.get('a')
        // cy.get('.forgot-pwd')
        // cy.get('#email-input')
        // cy.get('[type="password"]')
        // cy.get('form div button')

        cy.get('[type="email"]')


    
    })
})