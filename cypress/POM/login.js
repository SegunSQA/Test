class LoginPage{

    //selector for login page
     
    usernameField = '[data-test="username"]'
    passwordField = '[data-test="password"]'
    loginButton = '[data-test="login-button"]'
    standardUser = 'standard_user'
    lockedUser = 'locked_out_user'
    problemUser = 'problem_user'
    password = 'secret_sauce'


    setStandardUsername(){
        cy.get(this.usernameField).type(this.standardUser)
    }

    setpassword(){
        cy.get(this.passwordField).type(this.password)
    }

    setLoginButton(){
        cy.get(this.loginButton).click()
    }

    setLockedUsername(){
        cy.get(this.usernameField).type(this.lockedUser)
    }

    setproblemUser(){
        cy.get(this.usernameField).type(this.problemUser)
    }

}

export default LoginPage