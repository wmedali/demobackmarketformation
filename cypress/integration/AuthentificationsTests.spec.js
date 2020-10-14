describe('Tests d\'authentification', () => {

    beforeEach(() => {
        cy.visit('https://preprod.backmarket.fr/register')
    })

    it('Authentification KO', () => {
        cy.wait(3000)
        cy.get('#email-signin').type('mohammedali@yopmail.com')
        cy.get('#password-signin').type('123456789')
        cy.contains('Welcome Back!').click()
        //cy.get('[data-test="submit-button-login"]').click()
        cy.get('[data-test="login-credential-error"]').should('be.visible')
        cy.url().should('contain', '/register')
    })

    it('Authentification OK', () => {
        cy.wait(3000)
        cy.get('#email-signin').type('mohammedali@yopmail.com')
        cy.get('#password-signin').type('Ali123456')
        cy.contains('Welcome Back!').click()
        cy.url().should('contain', '/dashboard/orders')
    }) 

})