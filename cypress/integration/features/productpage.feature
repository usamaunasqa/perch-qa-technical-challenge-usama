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

  Scenario: Navigate back to Home page from Product page
    When I click on the View Details button of Product 1
    Then I should be on the Product page
    And I should see the Back to Products button
    When I click on the Back to Products button
    Then I should be navigated back to the Home page

  Scenario: Verify subtotal after updating quantity
    When I click on the View Details button of Product 3
    Then I should be on the Product page
    And I should see the Add to Cart button
    And I save the product price
    And I update the quantity to 3
    And I click on the Add to Cart button
    Then I should be on the Cart page
    And I verify the subtotal is correct for quantity 3
    And I should see quantity 3 in the cart
