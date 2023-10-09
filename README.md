# deel-boilerplate -Excercise 3

URL: https://growth.deel.training/dev/salary-insights Normal (Happy-path) flows with the following data: - Accountant, Brazil - QA Engineer, Canada Software Engineer, Japan a. Automated tests should run and pass. b. Prepare yourself to discuss additional improvements that can be made to your solution.

Cypress E2E Testing for Salary Insights

This repository contains end-to-end tests for the Salary Insights feature of the Growth application, using Cypress.io.
Project Overview

This project demonstrates how to perform E2E tests for the Salary Insights page, covering different roles and countries using the Cypress framework. It utilizes Cucumber for BDD-style tests, making it easy to understand and collaborate on the test scenarios.

Installation

1.  Clone the repository to your local machine:
    `https://github.com/qaPaschalE/deel-boilerplate.git`

2.  Navigate to the project directory:

`cd deel-boilerplate`

3. Install the dependencies:

`npm install` or `npm install --legacy-peer-deps`

Running Tests

To run the tests, use the following command:

`npx cypress run` or `npm run cy:run`

This will execute the Cypress tests headlessly in the terminal. You can also open the Cypress Test Runner for interactive test runs:

`npx cypress open` or `npm run cy:open`

Project Structure

    cypress/
        e2e/
            features/
                salaryInsights.feature: Cucumber feature file with test scenarios.
            step_definitions/
                salary_insights.steps.js: Step definitions for the Cucumber scenarios.
        support/
            page_objects/
                SalaryInsightsPage.js: Page Object model for the Salary Insights page.
            commands/
                customCommands.js: Custom Cypress commands for reusability.
    cypress.config.js: Cypress configuration file.

    Custom Commands

The project includes custom Cypress commands to enhance test readability and maintainability. These commands are defined in cypress/support/commands/customCommands.js.
Test Execution

Tests are executed against the https://growth.deel.training/dev/salary-insights endpoint. Ensure that the application is up and running before running the tests.
Additional Notes

    Update the SalaryInsightsPage.js and step definitions (salaryInsights.steps.js) to match the latest UI changes if necessary.
    Customize assertions and test scenarios according to your specific requirements.

Review of Assessment

Reviews are welcome! If you find any issues or improvements, feel free to create a GitHub issue or submit a pull request.
License

This project is licensed under the MIT License - see the LICENSE file for details.
