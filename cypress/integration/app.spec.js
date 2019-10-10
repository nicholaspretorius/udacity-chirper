describe("app", () => {
  it("should load the app", () => {
    cy.visit("http://localhost:3000");
    cy.get("div").contains("Starter Code");
  });
});
