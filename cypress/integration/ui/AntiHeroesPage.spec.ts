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

  context("Inside the card", () => {
    it("should show and hide cancel button", () => {
      cy.get("[data-testid=edit-button]").eq(0).click();
      cy.get("[data-testid=cancel-button]").click();
      cy.get("[data-testid=cancel-button]").should("not.exist");
    });

    it("should delete an anti hero  after clicking a delete button", () => {
      cy.get("[data-testid=delete-button]").eq(1).click();
      cy.findAllByTestId("card").should("have.length", ANTI_HEROES.length - 1);
      cy.findByTestId("nav-anti-heroes").contains(ANTI_HEROES.length - 1);
    });

    it("should update an anti hero", () => {
      const index = 0;
      const antiHero = ANTI_HEROES[index];
      const firstName = "edited";

      cy.get("[data-testid=edit-button]").eq(index).click();
      cy.get("@FirstName").clear({ force: true }).type(firstName);
      cy.putCommand(`/anti-heroes`, { ...antiHero, firstName });

      cy.get("@Save").click();
      cy.get("[data-testid=cancel-button]").click();
    });
  });

  context("Save Button", () => {
    it("should add a new anti hero", () => {
      const firstName = "Bucky";
      const lastName = "Barnes";
      const house = "Marvel";
      const knownAs = "The Winter Soldier";

      cy.get("@FirstName").type(firstName, { force: true });
      cy.get("@LastName").type(lastName, { force: true });
      cy.get("@House").type(house, { force: true });
      cy.get("@KnownAs").type(knownAs, { force: true });

      cy.postCommand("/anti-heroes", {
        firstName,
        lastName,
        house,
        knownAs,
      });

      cy.get("@Save").click();

      cy.findAllByTestId("card").should("have.length", ANTI_HEROES.length + 1);
      cy.findByTestId("nav-anti-heroes").contains(ANTI_HEROES.length + 1);
    });
  });
});
