describe('LOGIN',()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.title().should('equal','Swag Labs')
    })

    it('standard user',()=>{
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible').and('be.empty').type('standard_user')
        cy.get('#password').should('be.visible').and('be.empty').type('secret_sauce')
        cy.get(".submit-button").should('be.visible').and('contain','Login').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.contains('Products').should('be.visible')
        cy.get('.inventory_list').should('exist')
        cy.get('.inventory_item').should('have.length.greaterThan', 5).and('not.be.empty')
    })

    it('Lockedout User',()=>{
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible').and('be.empty').type('locked_out_userr')
        cy.get('#password').should('be.visible').and('be.empty').type('secret_sauce')
        cy.get(".submit-button").should('be.visible').and('contain','Login').click()

    })

    it('Problem User',()=>{
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible').and('be.empty').type('problem_user')
        cy.get('#password').should('be.visible').and('be.empty').type('secret_sauce')
        cy.get(".submit-button").should('be.visible').and('contain','Login').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.contains('Products').should('be.visible')
        cy.get('.inventory_list').should('exist')
        cy.get('.inventory_item').should('have.length.greaterThan', 5).and('not.be.empty')
    })

    it('Performance Glitch User',()=>{
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible').and('be.empty').type('performance_glitch_user')
        cy.get('#password').should('be.visible').and('be.empty').type('secret_sauce')
        cy.get(".submit-button").should('be.visible').and('contain','Login').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.contains('Products').should('be.visible')
        cy.get('.inventory_list').should('exist')
        cy.get('.inventory_item').should('have.length.greaterThan', 5).and('not.be.empty')
    })
})