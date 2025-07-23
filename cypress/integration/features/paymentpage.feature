Feature: Payment Page Validation

  Background:
    Given I visit the home page
    And I click on view details of product 2
    And I click on add to cart
    And I click on proceed to checkout
    And I fill the address form with valid data
    And I click on the continue to payment button

  Scenario: Click on place order without filling any fields
    When I click on the place order button
    Then I should remain on the payment page

  Scenario: Enter one character in card holder name
    When I enter one character in card holder name
    And I click on the place order button
    Then I should see card holder name error

  Scenario: Enter characters in card number field
    When I enter characters in card number field
    Then card number field should remain empty

  Scenario: Enter more than 16 digits in card number field
    When I enter 20 digits in card number field
    Then only 16 digits should be accepted

  Scenario: Enter invalid expiry date
    When I enter invalid expiry date
    And I click on the place order button
    Then I should see expiry date error

  Scenario: Enter one digit in CVV field
    When I enter one digit in CVV
    And I click on the place order button
    Then I should see CVV error

  Scenario: Enter valid payment information
    When I enter valid payment information
    And I click on the place order button
    Then I should navigate to the success page
