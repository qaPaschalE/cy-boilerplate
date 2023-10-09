import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SalaryInsightsPage from "../../support/pages/SalaryInsightsPage";
Given("I visit the Salary Insights page", () => {
  SalaryInsightsPage.visit();
});

When("I enter {string} as role and {string} as country", (role, country) => {
  SalaryInsightsPage.enterRole(role);
  SalaryInsightsPage.clickOnRole(role);
  SalaryInsightsPage.enterCountry(country);
  SalaryInsightsPage.clickOnCountry(country);
});

When("I click the search button", () => {
  SalaryInsightsPage.clickSearchButton();
});

Then(
  "I should see salary insights for {string} in {string}",
  (role, country) => {
    const expectedText = `Senior ${role} compensation in ${country}`;
    cy.contains(expectedText).should("be.visible");

    // Additional assertions can be added to validate specific elements or data on the result page
  }
);
