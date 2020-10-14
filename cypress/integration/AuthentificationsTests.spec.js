describe('Tests d\'authentification', () => {

    beforeEach(() => {
        cy.visit('https://preprod.backmarket.fr/register')
    })

    it('Authentification KO', () => {

        cy.authentification('mohammedali@yopmail', '123456')
        //cy.get('[data-test="submit-button-login"]').click()
        cy.get('[data-test="login-credential-error"]').should('be.visible')
        cy.url().should('contain', '/register')
    })

    it('Authentification OK', () => {
        cy.authentification('mohammedali@yopmail', 'Ali123456')
        cy.url().should('contain', '/dashboard/orders')
    })



})