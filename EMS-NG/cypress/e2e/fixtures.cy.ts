describe('Using fixtures', ()=>{
    let fixdata = {}

    beforeEach(()=>{
        cy.fixture('example').then(function (data){
            fixdata = data
            cy.log('data ',fixdata)
            // cy.log('data ',this['data'])
        })
    })

    it('pulls data from a fixture', ()=>{
        cy.fixture('example').then(data=>{
            cy.log('data ', data)
        })
    })

    it('update fixture data inline', ()=>{
        cy.fixture('example').then(data=>{
            data.email = 'updateemail@yopmail.com'
            cy.log('data ', data)
        })
    })

    it('uses fixture data in a network request', ()=>{
        cy.visit('/')
        cy.loginUser()
        cy.get('[data-cy="projects"]').click()
        cy.get('[open=""] > .ml-4 > :nth-child(2)').click()
        cy.intercept('GET', 'http://localhost:4400/projects/').as('getProjects')
        cy.wait('@getProjects').then((res=>{
            cy.log('Response ',res)
        }))
    })
})