///<reference types="cypress" />

declare namespace Cypress{
    interface Chainable{
        loginUser() : Chainable <void>
    }
}