/// <reference types="cypress" />

describe("Category and Random Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("submits and displays the fact", () => {
    cy.get("select[name=fact]").select("dev");
    cy.get("#submit-category").click();
    cy.contains("dev Fact");
  });

  it("disaplys a random fact", () => {
    cy.get("#submit-random").click();
    cy.contains("Random Fact");
  });
});

describe("Free Search Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays elements based on the search Query", () => {
    cy.get("input[name=search]").type("travel");
    cy.get("#submit-query").click();
    cy.get("#facts-view").children().should("contain", "travel");
  });
});
