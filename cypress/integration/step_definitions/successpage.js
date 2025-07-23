import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import AddressPage from '../../pages/AddressPage';
import PaymentPage from '../../pages/PaymentPage';
import SuccessPage from '../../pages/SuccessPage';

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

Given('I fill the address form with valid data', () => {
  AddressPage.elements.firstNameInput().clear().type('Usama');
  AddressPage.elements.emailInput().clear().type('usama@test.com');
  AddressPage.elements.phoneInput().clear().type('1234567890');
  AddressPage.elements.streetInput().clear().type('Street7');
  AddressPage.elements.cityInput().clear().type('Lahore');
  AddressPage.elements.stateInput().clear().type('Punjab');
  AddressPage.elements.zipInput().clear().type('12345');
  AddressPage.elements.countryInput().clear().type('Pakistan');
});

Given('I click on the continue to payment button', () => {
  AddressPage.elements.continueToPaymentButton().click();
});

Given('I enter valid payment information', () => {
  PaymentPage.elements.cardHolderInput().clear().type('Usama');
  PaymentPage.elements.cardNumberInput().clear().type('1234567890123456');
  PaymentPage.elements.expiryInput().clear().type('0925');
  PaymentPage.elements.cvvInput().clear().type('123');
});

Given('I click on the place order button', () => {
  PaymentPage.elements.placeOrderButton().click();
});

Then('I should see the success icon', () => {
  SuccessPage.elements.successIcon().should('be.visible');
});

Then('I should see the confirmation message', () => {
  SuccessPage.elements.confirmationMessage().should('contain', "We've received your order and will begin processing it right away");
});

Then('I should see view orders and continue shopping buttons', () => {
  SuccessPage.elements.viewOrdersButton().should('be.visible');
  SuccessPage.elements.continueShoppingButton().should('be.visible');
});

When('I click on the continue shopping button', () => {
  SuccessPage.elements.continueShoppingButton().click();
});

Then('I should be navigated to the home page', () => {
  cy.url().should('not.include', '/success');
});

When('I click on the view orders button', () => {
  SuccessPage.elements.viewOrdersButton().click();
});

Then('I should be navigated to the profile page', () => {
  cy.url().should('include', '/profile');
});

Then('I should see Order History with order items', () => {
  SuccessPage.elements.orderHistoryTitle().should('contain', 'Order History');
  SuccessPage.elements.orderItems().should('exist').and('have.length.at.least', 1);
  SuccessPage.elements.productName().should('be.visible').should('contain', 'Premium Leather Watch');
});
