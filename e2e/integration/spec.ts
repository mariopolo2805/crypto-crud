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
