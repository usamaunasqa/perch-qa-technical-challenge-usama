Feature: Address Page Validation

  Background:
    Given I visit the home page
    And I click on view details of product 2
    And I click on add to cart
    And I click on proceed to checkout

  Scenario: Verify all address fields are required
    When I click on the continue to payment button
    Then I should remain on the address page

  Scenario: Enter invalid email and verify error
    When I fill all the address fields with invalid email
    And I click on the continue to payment button
    Then I should see email error message

  Scenario: Enter name with numbers and verify error
    When I enter invalid name with numbers
    And I click on the continue to payment button
    Then I should see name error message

  Scenario: Enter less than 10 digits in phone number
    When I enter invalid phone number
    And I click on the continue to payment button
    Then I should see phone error message

  Scenario: Enter invalid city with numbers
    When I enter invalid city
    And I click on the continue to payment button
    Then I should see city error message

  Scenario: Enter invalid state with numbers
    When I enter invalid state
    And I click on the continue to payment button
    Then I should see state error message

  Scenario: Enter invalid ZIP code
    When I enter invalid zip code
    And I click on the continue to payment button
    Then I should see zip error message

  Scenario: Enter invalid country
    When I enter invalid country
    And I click on the continue to payment button
    Then I should see country error message

  Scenario: Enter valid address details and proceed
    When I fill the form with valid data
    And I click on the continue to payment button
    Then I should see back to address button
    And I click back to address and verify I'm on address page
