/// <reference types="cypress"/>

const ANTI_HEROES = [
  {
    firstName: "Lex",
    lastName: "Luther",
    house: "DC",
    knownAs: "Lex",
    id: "3290fhe",
  },
  {
    firstName: "Max",
    lastName: "Eisenhardt",
    house: "Marvel",
    knownAs: "Magneto",
    id: "6r8finlfy",
  },
];

describe("Anti-Heroes Page", () => {
  beforeEach(() => {
    /* Custom commands. Please see support/commands.ts
     * and the global.d.ts for intellisense */
    cy.getCommand("/anti-heroes", ANTI_HEROES);
    cy.deleteCommand("/anti-heroes/*");
    cy.NavigateByTestIdCommand("nav-anti-heroes");
    cy.SetupInputFieldsCommand();
  });

  it("should render anti heroes", () => {
    cy.get("[data-testid=card]").should("have.length", ANTI_HEROES.length);
  });
});
