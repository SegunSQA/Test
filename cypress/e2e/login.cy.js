import LoginPage from '../POM/login'
const demo = new LoginPage

describe('LOGIN USER',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('equal','Swag Labs')
    })

    it('standard user',()=>{
        demo.setStandardUsername()
        demo.setpassword()
        demo.setLoginButton()
        
    })

    it('LOCKED USER',()=>{
        demo.setLockedUsername()
        demo.setpassword()
        demo.setLoginButton
    })

    it('PROBLEM USER',()=>{
        demo.setproblemUser()
        demo.setpassword()
        demo.setLoginButton()
    })
})