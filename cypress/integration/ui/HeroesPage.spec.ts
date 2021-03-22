/// <reference types="cypress"/>

const HEROES = [
  {
    id: "7ggew732dw",
    firstName: "Barry",
    lastName: "Allen",
    house: "DC",
    knownAs: "Flash",
  },
  {
    id: "43twagfdh",
    firstName: "Scott",
    lastName: "Summer",
    house: "Marvel",
    knownAs: "Cyclopes",
  },
];

describe("Heroes Page", () => {
  beforeEach(() => {
    /* Custom commands. Please see support/commands.ts
     * and the global.d.ts for intellisense */
    cy.getCommand("/heroes", HEROES);
    cy.deleteCommand("/heroes/*");
    cy.NavigateByTestIdCommand("nav-heroes");
    cy.SetupInputFieldsCommand();
  });

  it("should render heroes", () => {
    cy.get("[data-testid=card]").should("have.length", HEROES.length);
  });

  context("Inside the card", () => {
    it("should show and hide cancel button", () => {
      cy.get("[data-testid=edit-button]").eq(0).click();
      cy.get("[data-testid=cancel-button]").click();
      cy.get("[data-testid=cancel-button]").should("not.exist");
    });

    it("should delete an hero  after clicking a delete button", () => {
      cy.get("[data-testid=delete-button]").eq(1).click();
      cy.findAllByTestId("card").should("have.length", HEROES.length - 1);
      cy.findByTestId("nav-heroes").contains(HEROES.length - 1);
    });

    it("should update an hero", () => {
      const index = 0;
      const hero = HEROES[index];
      const firstName = "edited";

      cy.get("[data-testid=edit-button]").eq(index).click();
      cy.get("@FirstName").clear({ force: true }).type(firstName);
      cy.putCommand(`/heroes`, { ...hero, firstName });

      cy.get("@Save").click();
      cy.get("[data-testid=cancel-button]").click();
    });
  });

  context("Save Button", () => {
    it("should add a new hero", () => {
      const firstName = "Bucky";
      const lastName = "Barnes";
      const house = "Marvel";
      const knownAs = "The Winter Soldier";

      cy.get("@FirstName").type(firstName, { force: true });
      cy.get("@LastName").type(lastName, { force: true });
      cy.get("@House").type(house, { force: true });
      cy.get("@KnownAs").type(knownAs, { force: true });

      cy.postCommand("/heroes", {
        firstName,
        lastName,
        house,
        knownAs,
      });

      cy.get("@Save").click();

      cy.findAllByTestId("card").should("have.length", HEROES.length + 1);
      cy.findByTestId("nav-heroes").contains(HEROES.length + 1);
    });
  });
});
