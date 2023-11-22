describe('Navigation', ()=>{

    it('should navigate back and forth', ()=>{
        // cy.visit('http://localhost:4200/')
        // cy.get('[data-cy="email"]').type('dankinyi99@gmail.com')
        // cy.get('[data-cy="password"]').type('12345678')
        // cy.get('[data-cy="login-btn"]').click()
        cy.loginUser()

        cy.location('pathname').should('equal', '/admin')

        cy.go('back')

        cy.location('pathname').should('eq', '/')

        cy.go('forward')

        cy.location('pathname').should('equal', '/admin')

        cy.contains('EMS')
    })
})