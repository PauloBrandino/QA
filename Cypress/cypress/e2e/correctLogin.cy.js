describe('Login Tests', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        cy.get('[data-test="login-button"]').click();
    });

    it('Acessa página de Login e realizao a autendicação com sucesso', () => {
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="input-loginEmail"]').type('contatobrandino@gmail.com')
      cy.get('[data-test="input-loginPassword"]').type('Abc123')
      cy.get('[data-test="submit-button"]').click();
    });
})