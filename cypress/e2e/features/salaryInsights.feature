Feature: Salary Insights Page

    Scenario Outline: Verify Salary Insights for Different Roles and Countries
        Given I visit the Salary Insights page
        When I enter "<role>" as role and "<country>" as country
        And I click the search button
        Then I should see salary insights for "<role>" in "<country>"

        Examples:
            | role              | country |
            | Accountant        | Brazil  |
            | QA Engineer       | Canada  |
            | Software Engineer | Japan   |
