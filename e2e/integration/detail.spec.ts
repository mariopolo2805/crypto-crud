describe('test detail (mobile)', () => {

  beforeEach(() => {
    cy.viewport(300, 600);
    cy.visit('/list/bitcoin');
  });

  it('test detail', () => {
    cy.contains('Detalle de Criptomoneda');

    cy.get('#crypto-detail').then((list) => {
      if (list.find('.crypto-detail__card').length > 0) {
        cy.get('mat-card-title').should('contain', 'BTC');
        cy.get('.crypto-detail__chart');
        cy.get('#hide-btn').click();
        cy.get('.crypto-detail__chart').should('be.hidden');
      } else {
        cy.contains('Hubo un error al recuperar los datos');
      }
    })
  });
});
