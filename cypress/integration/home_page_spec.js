describe('The Home Page', function() {
    it('successfully loads', function() {
      cy.visit('http://localhost:8080') // change URL to match your dev URL
      cy.get('header#cabecalho').should('exist');
      cy.get('body').should('not.have.css', 'backgroundColor', 'rgb(255, 255, 255)')
      cy.get('footer#rodape').should('exist');
      cy.get('img').should('exist');
      cy.get('ol').should('exist');
      cy.get('ul').should('exist');
      cy.get('table').should('exist');
      cy.get('a').click() 
      cy.url().should('exist');
      cy.get('table').should('exist');
    })
  })