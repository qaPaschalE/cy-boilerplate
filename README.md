# boilerplate -Excercise 3



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


