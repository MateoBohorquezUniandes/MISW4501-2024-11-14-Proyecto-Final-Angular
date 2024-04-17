describe('template spec', () => {
  beforeEach(() =>{
    cy.viewport(1366,768);
  })
  it('passes', () => {
    cy.visit('https://google.com.co');
    cy.get('textarea.gLFyf').type('Uniandes');
    cy.get('img.lnXdpd').should('have.length', 1);
  })
})
