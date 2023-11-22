describe('Navigation', ()=>{

    it('should navigate back and forth', ()=>{
        cy.visit('/')
        let login_email = cy.get('[data-cy="email"]')

        login_email.type('dankinyi99@gmail.com')

        let login_pwd =  cy.get('[data-cy="password"]')
        login_pwd.type('12345678')
        
        cy.get('[data-cy="login-btn"]').as('loginbtn')

        cy.get('@loginbtn').then((el)=>{
            expect(el.val()).to.equal('Submit')
            expect(el.val()).to.contain('Sub')
        })

        // cy.location('pathname').should('equal', '/admin')

        // cy.go('back')

        // cy.location('pathname').should('eq', '/')

        // cy.go('forward')

        // cy.location('pathname').should('equal', '/admin')

        // cy.contains('EMS')
    })
})