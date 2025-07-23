Feature: Success Page Confirmation

  Background:
    Given I visit the home page
    And I click on view details of product 2
    And I click on add to cart
    And I click on proceed to checkout
    And I fill the address form with valid data
    And I click on the continue to payment button
    And I enter valid payment information
    And I click on the place order button

  Scenario: Success page should display all elements
    Then I should see the success icon
    And I should see the confirmation message
    And I should see view orders and continue shopping buttons

  Scenario: Clicking continue shopping navigates to home
    When I click on the continue shopping button
    Then I should be navigated to the home page

  Scenario: Clicking view orders navigates to profile and shows orders
    When I click on the view orders button
    Then I should be navigated to the profile page
    And I should see Order History with order items
