describe('Sign In Tests', () => {
  it('Acessa página de cadastros e realiza o cadastro preenchendo os campos necessários', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click()
    cy.get('[data-test="input-name"]').type('Paulo Brandino');
    cy.get('[data-test="input-email"]').type('contatobrandino@gmail.com');
    cy.get('[data-test="input-password"]').type('Abc123');
    cy.get('[data-test="input-confirm-password"]').type('Abc123');
    cy.get('[data-test="submit-button"]').click();
  })
})