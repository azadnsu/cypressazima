describe('Simple tests', () => {
    it('Using query commands', () => {
        cy.visit('https://example.cypress.io/commands/querying');
        cy.get('button').should('contain', 'Button')
    });

    it('Should type into fields', () => {
        cy.visit('https://example.cypress.io/commands/actions');
        cy.get('.action-email')
            .type('david@fathomtech.io').should('have.value', 'david@fathomtech.io')
    });
});