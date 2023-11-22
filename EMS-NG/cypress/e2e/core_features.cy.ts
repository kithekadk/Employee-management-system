///<reference types="cypress"/>

describe('Explains cypress core features', ()=>{

    beforeEach(()=>{
        cy.visit('/admin')
    })

    afterEach(()=>{
        cy.visit('/')
    })

    it('uses contains keyword', ()=>{
        
        cy.contains('PROJECTS')
        cy.get('.employees').contains('Employees')
    })

    it('differentiate get and find', ()=>{
        
        cy.get('.employees').get('app-navbar')

        cy.get('.employees').find('span')
    })

    it("registers a user", ()=>{
        
        // cy.get('.employees').click()
        // cy.get('[data-cy="register-employee-btn"]').click()
        // cy.get('[data-cy="fullname"]').type('John Doe')
        // cy.get('[data-cy="email"]').type('johndoe@yopmail.com')
        // cy.get('[data-cy="phone_no"]').type('0712345678')
        // cy.get('[data-cy="id_no"]').type('34567890')
        // cy.get('[data-cy="kra"]').type('A04GKJHIKUI')
        // cy.get('[data-cy="nhif"]').type('NHIF4567GHJ')
        // cy.get('[data-cy="nssf"]').type('NSSF123456')
        // cy.get('[data-cy="password"]').type('12345678')
        // cy.get('[data-cy="create-employee-btn"]').click()
    })

    // it("logs in a user", ()=>{
    //     cy.visit('/')


    //     cy.get('[data-cy="email"]').type('dankinyi99@gmail.com')
    //     cy.get('[data-cy="password"]').type('12345678')
    //     cy.get('[data-cy="login-btn"]').click()

        
    //     cy.get('[data-cy="logged-in-success-popup"]').click()
    // })

    it("checks if there are projects" , ()=>{
        

        cy.get('[data-cy="all-projects"]').should('have.length.greaterThan', 1)
    })

    it('checks for partial input', ()=>{
        

        cy.get('[data-cy="projects"]').click()
        cy.get('[data-cy="create-project-btn"]').click()
        cy.get('[data-cy="assignto"]').select('employee')
    })
})