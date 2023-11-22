describe('More on Configurations', {
    defaultCommandTimeout: 10000,
    execTimeout: 5000, //cy.exec
    taskTimeout: 4000 //cy.task
}, ()=>{

    it('configuring test case', {
        execTimeout: 6000
    },()=>{

        cy.visit('/')

    })
})