let el
describe('POM FIXTURE 1',()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.title().should('equal','Swag Labs')
        cy.fixture('example').then((sel)=>{
            el=sel
        })
    })

    it('Standard User',()=>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
   
    })
    it('LOCKED USER',()=>{
            cy.get(el.usernameField).type(el.lockedUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
    })

    it('PROBLEM USER',()=>{
            cy.get(el.usernameField).type(el.problemUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
    })
})