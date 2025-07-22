import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import AddressPage from '../../pages/AddressPage';
import PaymentPage from '../../pages/PaymentPage';

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

When('I click on the place order button', () => {
  PaymentPage.elements.placeOrderButton().click();
});

Then('I should remain on the payment page', () => {
  cy.url().should('include', 'payment');
});

When('I enter one character in card holder name', () => {
  PaymentPage.elements.cardHolderInput().type('A');
});

Then('I should see card holder name error', () => {
  PaymentPage.elements.errorMessage().should('contain', 'Card holder name must be 2-50 characters and contain only letters');
});

When('I enter characters in card number field', () => {
  PaymentPage.elements.cardNumberInput().type('abcd');
});

Then('card number field should remain empty', () => {
  PaymentPage.elements.cardNumberInput().should('have.value', '');
});

When('I enter 20 digits in card number field', () => {
  PaymentPage.elements.cardNumberInput().type('12345678901234567890');
});

Then('only 16 digits should be accepted', () => {
  PaymentPage.elements.cardNumberInput()
    .invoke('val')
    .then((value) => {
      const digitsOnly = value.replace(/\s/g, '');
      expect(digitsOnly.length).to.eq(16);
    });
});


When('I enter invalid expiry date', () => {
  PaymentPage.elements.expiryInput().type('2020');
});

Then('I should see expiry date error', () => {
  PaymentPage.elements.errorMessage().should('contain', 'Expiry date must be in MM/YY format');
});

When('I enter one digit in CVV', () => {
  PaymentPage.elements.cvvInput().type('1');
});

Then('I should see CVV error', () => {
  PaymentPage.elements.errorMessage().should('contain', 'CVV must be 3 or 4 digits');
});

When('I enter valid payment information', () => {
  PaymentPage.elements.cardHolderInput().clear().type('Usama');
  PaymentPage.elements.cardNumberInput().clear().type('1234567890123456');
  PaymentPage.elements.expiryInput().clear().type('0920');
  PaymentPage.elements.cvvInput().clear().type('1234');
});

Then('I should navigate to the success page', () => {
  cy.url().should('include', 'success');
});
