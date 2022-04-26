
describe('Tests application' , () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('Should successfully play a round and display a win in the leader board', () => {
    cy.get("#RegisterNewRoundModal").should('exist');

    cy.get("#playerOne").type("Alexandre")
    cy.get("#playerTwo").type("Benjamin")

    cy.get("[type='submit']").click();
    cy.get("#currentPlayerTurn").contains(`Alexandre's Turn`)
    cy.get("#0").click();
    cy.get("#currentPlayerTurn").contains(`Benjamin's Turn`)
    cy.get("#1").click();
    cy.get("#4").click();
    cy.get("#2").click();
    cy.get("#8").click();
    cy.get('#gameResultModal').should('exist');
    cy.get('#winner').contains('Alexandre')
  })

  it('Should successfully play a round and display a win in the leader board', () => {
    cy.get("#RegisterNewRoundModal").should('exist');

    cy.get("#playerOne").type("Alexandre")
    cy.get("#playerTwo").type("Benjamin")

    cy.get("[type='submit']").click();
    cy.get("#currentPlayerTurn").contains(`Alexandre's Turn`)
    cy.get("#0").click();
    cy.get("#currentPlayerTurn").contains(`Benjamin's Turn`)
    cy.get("#1").click();
    cy.get("#2").click();
    cy.get("#4").click();
    cy.get("#7").click();
    cy.get("#6").click();
    cy.get("#8").click();
    cy.get("#5").click();
    cy.get("#3").click();
    cy.get('#gameResultModal').should('exist');
    cy.get('#winner').should('have.value', '');
  })
})

