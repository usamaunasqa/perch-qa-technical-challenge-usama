Feature: Cart Page Functionality

  Background:
    Given I am on the Home page

  Scenario: Cart button shows empty cart
    Then I should see the Cart button
    When I click on the Cart button
    Then I should see an empty cart message

  Scenario: Add and remove a product from cart
    When I click on the View Details button of Product 2
    Then I should be navigated to the Product page
    And I should see the Add to Cart button
    When I click on the Add to Cart button
    Then I should be navigated to the Cart page
    And I should see the Remove Product button
    When I click on the Remove Product button
    Then I should see an empty cart message
    And I should see the Continue Shopping button

  Scenario: Update quantity and verify subtotal
    When I click on the View Details button of Product 2
    Then I should be navigated to the Product page
    And I should see the Add to Cart button
    When I click on the Add to Cart button
    Then I should be navigated to the Cart page
    And I store the subtotal value
    When I change the quantity to 2
    Then the subtotal should reflect the updated quantity

  Scenario: Add multiple products and verify combined subtotal
    When I click on the View Details button of Product 3
    Then I should be navigated to the Product page
    And I should see the Add to Cart button
    When I click on the Add to Cart button
    Then I should be navigated to the Cart page
    When I click on the Continue Shopping button
    Then I should be navigated to the Home page
    And I should see the Cart button
    When I click on the View Details button of Product 1
    Then I should be navigated to the Product page
    And I should see the Add to Cart button
    When I click on the Add to Cart button
    Then I should be navigated to the Cart page
    And I should see 2 Remove Product buttons
    Then the subtotal should equal the sum of both item prices
