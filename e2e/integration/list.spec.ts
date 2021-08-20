describe('test list (mobile)', () => {

  beforeEach(() => {
    cy.viewport(300, 600);
    cy.visit('/list');
  });

  it('test list', () => {
    cy.contains('Listado de Criptomonedas');

    cy.get('#crypto-list').then((list) => {
      if (list.find('.crypto-list').length > 0) {
        cy.get('.crypto-list__item').should('contain', '$');
      } else {
        cy.contains('Hubo un error al recuperar los datos');
      }
    })
  });
});
