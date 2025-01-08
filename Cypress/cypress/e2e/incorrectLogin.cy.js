describe('Incorrect login Tests', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    });

    it('Acessa página de Login e realiza a autendicação fora do padrão', () => {
      cy.get('[data-test="input-loginEmail"]').type('contatobrandino@gasfafsa')
      cy.get('[data-test="input-loginPassword"]').type('A123')
      cy.get('[data-test="submit-button"]').click();
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    });
})