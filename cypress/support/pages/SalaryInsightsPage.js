class SalaryInsightsPage {
  visit() {
    cy.visit("https://growth.deel.training/dev/salary-insights");
  }

  enterRole(role) {
    cy.get("#mui-2").type(role);
  }
  clickOnRole(role) {
    cy.get("li").contains(role).should("be.visible").click();
  }

  enterCountry(country) {
    cy.get("#mui-4").type(country);
  }
  clickOnCountry(country) {
    cy.contains(country).click();
  }

  clickSearchButton() {
    cy.contains("Search").click();
  }

  waitForResultElement() {
    cy.get("#result-element").should("exist");
  }

  assertURLContains(expectedText) {
    cy.url().should("include", expectedText);
  }
}

export default new SalaryInsightsPage();
