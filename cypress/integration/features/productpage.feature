Feature: Product Page Functionality

  Background:
    Given I am on the Home page

  Scenario: View details and verify product content
    When I click on the View Details button of Product 2
    Then I should be on the Product page
    And I should see the Add to Cart button
    And I should see the Product detail image
    And I should see the Product name
    And I should see the Product description

  Scenario: Change quantity and verify updated price
    When I click on the View Details button of Product 1
    Then I should be on the Product page
    And I store the original product price
    When I change quantity to 3
    Then the displayed product price should equal original price multiplied by quantity

  Scenario: Navigate back to Home page from Product page
    When I click on the View Details button of Product 1
    Then I should be on the Product page
    And I should see the Back to Products button
    When I click on the Back to Products button
    Then I should be navigated back to the Home page