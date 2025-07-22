Feature: Profile Page Functionality

  Background:
    Given I am on the Home page
    When I click on the Profile button
    Then I should be navigated to the Profile page

  Scenario: Profile page shows Edit Profile button
    Then I should see the Edit Profile button

  Scenario: Cancel editing profile does not change name and email
    When I remember the current profile name and email
    And I click on the Edit Profile button
    And I enter "Automated Name" in the name field
    And I enter "automated@example.com" in the email field
    And I click on the Cancel Edit button
    Then the displayed name and email should not be updated and should show 

  Scenario: Save changes updates profile info
    When I click on the Edit Profile button
    And I enter "Updated" in the name field
    And I enter "automated@example.com" in the email field
    And I click on the Save Changes button
    Then the displayed name and email should be updated to:
      | name              | Updated                  |
      | email    | automated@example.com  |

  Scenario: Start Shopping button navigates back to Home
    When I click on the Start Shopping button
    Then I should be navigated to the Home page
    And I should see 3 product images

  Scenario: Back to Home button navigates back to Home
    When I click on the Back to Home button
    Then I should be navigated to the Home page
    And I should see the Cart button
