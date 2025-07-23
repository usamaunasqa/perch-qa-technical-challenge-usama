class AddressPage {
  elements = {
    viewProduct2Button: () => cy.get('[data-testid="view-product-2"]'),
    addToCartButton: () => cy.get('[data-testid="add-to-cart"]'),
    proceedToCheckoutButton: () => cy.get('[data-testid="proceed-to-checkout"]'),
    continueToPaymentButton: () => cy.get('[data-testid="continue-to-payment"]'),
    backToCartButton: () => cy.get('[data-testid="back-to-cart"]'),
    backToAddressButton: () => cy.get('[data-testid="back-to-address"]'),

    firstNameInput: () => cy.get('[data-testid="firstname-input"]'),
    emailInput: () => cy.get('[data-testid="email-input"]'),
    phoneInput: () => cy.get('[data-testid="phone-input"]'),
    streetInput: () => cy.get('[data-testid="street-input"]'),
    cityInput: () => cy.get('[data-testid="city-input"]'),
    stateInput: () => cy.get('[data-testid="state-input"]'),
    zipInput: () => cy.get('[data-testid="zipcode-input"]'),
    countryInput: () => cy.get('[data-testid="country-input"]'),

    errorMessage: () => cy.get('.error-message'),
  };
}

export default new AddressPage();
