describe('Using fixtures', ()=>{

    let fixturedata = {}

    beforeEach(()=>{
        cy.fixture('example').then(function (data){
            fixturedata = data
            cy.log('data ', fixturedata)
        })
    })

    it('fetches data from a fixture', ()=>{
        cy.fixture('example').then(data=>{
            cy.log('data ', data)
        })
    })

    it('updates fixture data', ()=>{
        cy.fixture('example').then(data=>{
            data.email = 'updatedemail@yopmail.com';
            cy.log('data ',data)
        })
    })

    it('visualizes the fixture data', ()=>{
        cy.log('fixdata ', fixturedata)
        
        // cy.intercept
    })
})