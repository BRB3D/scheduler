describe('Appointments', () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");
    cy.visit('/');
    cy.contains('Monday');
  });


  it('Should Book an Interview', () => {

    cy.get('[alt=Add]')
      .first()
      .click();

    cy.get('[data-testid=student-name-input]')
      .type('Lydia Miller-Jones');

    cy.get('[alt="Sylvia Palmer"]')
      .click();

    cy.contains('Save')
      .click();

    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  })



  it('Should Edit an Interview', () => {
    cy.get("[alt=Edit]")
      .first()
      .click({ force: true });

    cy.get("[data-testid=student-name-input]").clear().type("Lydia Miller-Jones");
    cy.get("[alt='Tori Malcolm']").click();

    cy.contains("Save").click();

    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Tori Malcolm");

  })


  it('Should Cancel Interview', () => {
    cy.get("[alt=Delete]")
      .first()
      .click({ force: true });

    cy.contains("Confirm")
      .click();

    cy.contains("Deleting").should("exist");
    cy.contains("Deleting").should("not.exist");

    cy.contains('.appointment__card--show', 'Archie Cohen').should('not.exist');
  });
});