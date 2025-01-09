describe('Login Tests', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        cy.get('[data-test="login-button"]').click();
    });

    it('Acessa página de Login e realizao a autendicação com sucesso', () => {
      cy.login('contatobrandino@gmail.com', 'Abc123')
    });
})