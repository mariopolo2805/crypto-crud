describe('test home (mobile)', () => {

  beforeEach(() => {
    cy.viewport(300, 600);
    cy.visit('/');
  });

  it('test home', () => {
    cy.url().should('include', '/home');
    cy.contains('Mario Antonio Polo Daza');
  });

  it('test drawer', () => {
    cy.get('#menu-btn').click();
    cy.contains('Secciones');
  });

  it('test change languaje', () => {
    cy.get('#menu-btn').click();
    cy.get('#flag-en').click();
    cy.contains('Sections');
  });
});
