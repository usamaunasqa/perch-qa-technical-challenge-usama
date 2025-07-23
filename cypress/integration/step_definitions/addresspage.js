import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import AddressPage from '../../pages/AddressPage';

Given('I visit the home page', () => {
  cy.visit('/');
});

Given('I click on view details of product 2', () => {
  AddressPage.elements.viewProduct2Button().click();
});

Given('I click on add to cart', () => {
  AddressPage.elements.addToCartButton().click();
});

Given('I click on proceed to checkout', () => {
  AddressPage.elements.proceedToCheckoutButton().click();
});

When('I click on the continue to payment button', () => {
  AddressPage.elements.continueToPaymentButton().click();
});

Then('I should remain on the address page', () => {
  cy.url().should('not.include', 'payment');
});

When('I fill all the address fields with invalid email', () => {
  AddressPage.elements.firstNameInput().type('TestName');
  AddressPage.elements.emailInput().type('test.com');
  AddressPage.elements.phoneInput().type('1234567890');
  AddressPage.elements.streetInput().type('123 Main');
  AddressPage.elements.cityInput().type('City');
  AddressPage.elements.stateInput().type('State');
  AddressPage.elements.zipInput().type('12345');
  AddressPage.elements.countryInput().type('Pakistan');
});

Then('I should see email error message', () => {
  AddressPage.elements.errorMessage().should('contain', 'Please enter a valid email address');
});

When('I enter invalid name with numbers', () => {
  AddressPage.elements.firstNameInput().type('test123');
});

Then('I should see name error message', () => {
  AddressPage.elements.errorMessage().should('contain', 'Name must be 2-30 characters and contain only letters');
});

When('I enter invalid phone number', () => {
  AddressPage.elements.phoneInput().type('12345');
});

Then('I should see phone error message', () => {
  AddressPage.elements.errorMessage().should('contain', 'Phone number must be 10-15 digits');
});

When('I enter invalid city', () => {
  AddressPage.elements.cityInput().type('test1');
});

Then('I should see city error message', () => {
  AddressPage.elements.errorMessage().should('contain', 'City must contain only letters and spaces');
});

When('I enter invalid state', () => {
  AddressPage.elements.stateInput().type('test1');
});

Then('I should see state error message', () => {
  AddressPage.elements.errorMessage().should('contain', 'State must contain only letters and spaces');
});

When('I enter invalid zip code', () => {
  AddressPage.elements.zipInput().type('123');
});

Then('I should see zip error message', () => {
  AddressPage.elements.errorMessage().should('contain', 'ZIP code must be 4 or 5 digits');
});

When('I enter invalid country', () => {
  AddressPage.elements.countryInput().type('test1');
});

Then('I should see country error message', () => {
  AddressPage.elements.errorMessage().should('contain', 'Country must contain only letters and spaces');
});

When('I fill the form with valid data', () => {
  AddressPage.elements.firstNameInput().clear().type('Usama');
  AddressPage.elements.emailInput().clear().type('usama@test.com');
  AddressPage.elements.phoneInput().clear().type('1234567890');
  AddressPage.elements.streetInput().clear().type('Street7');
  AddressPage.elements.cityInput().clear().type('Lahore');
  AddressPage.elements.stateInput().clear().type('Punjab');
  AddressPage.elements.zipInput().clear().type('12345');
  AddressPage.elements.countryInput().clear().type('Pakistan');
});

Then('I should see back to address button', () => {
  AddressPage.elements.backToAddressButton().should('be.visible');
});

Then('I click back to address and verify I\'m on address page', () => {
  AddressPage.elements.backToAddressButton().click();
  cy.url().should('include', 'address');
});
