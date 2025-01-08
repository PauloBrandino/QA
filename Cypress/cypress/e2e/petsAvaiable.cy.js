describe('Pets Avaiable Tests', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('.button').click();
});
    it('Acessa página de Pets disponíveis e testa os botões Headers', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/')
      cy.get('.button').click();
      cy.get('.header__home').click();
      cy.get('.button').click();
      cy.get('.header__message').click();
    });

    it('Acessa página de Login', () => {
       cy.get('.header__home').click();
      });

    it('Acessa página de Pets e clica em Falar com o responsável ', () => {
      cy.get(':nth-child(1) > .card__contact').click();
    })  
  })