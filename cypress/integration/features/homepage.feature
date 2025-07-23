Feature: Homepage Navigation

Background: 
  Given I am on the homepage
  And I should see the main content
  And I should see the full list of products

Scenario: User can navigate to the homepage
  Then I should see the main content
  And I should see the full list of products

Scenario: Navigate to Profile page and return back to Home page
  Then I should see the Profile button
  When I click on the Profile button
  Then I should be navigated to the Profile page
  And I should see the Back to Home button
  When I click on the Back to Home button
  Then I should be navigated back to the Home page
  And I should see the Profile button again

Scenario: Search for 'Wireless Headphones' and clear the search field
  When I type "Wireless Headphones" in the search field
  Then Only "Wireless Headphones" product should be visible
  And "Premium leather watch" product should not be visible
  And "Classic white sneakers" product should not be visible
  When I clear the search field
  Then I should see the full list of products

Scenario: Sort products by price in ascending and descending order
  Then I should see the Sort button
  And I store the prices of products before sorting
  When I click on the Sort button
  Then Products should be sorted by price ascending
  When I click on the Sort button again
  Then Products should be sorted by price descending

 Scenario: View details of a product and return to Home page
  When I click on the View Details button of Premium Leather Watch
  Then I should be navigated to the product detail page for product 2
  And I should see the Back to Products button
  When I click on the Back to Products button
  Then I should be navigated back to the Home page
  And I should see the Profile button

Scenario: Navigate to Cart page and return to Home page
  Then I should see the Cart button
  When I click on the Cart button
  Then I should be navigate to the Cart page
  And I should see the Cart header
  And I should see the Continue Shopping button
  When I click on Continue Shopping button
  Then I should be navigated back to the Home page
  And I should see the product images  
 

