class PaymentPage {
  elements = {
    cardHolderInput: () => cy.get('[data-testid="cardholder-input"]'),
    cardNumberInput: () => cy.get('[data-testid="card-number-input"]'),
    expiryInput: () => cy.get('[data-testid="expiry-input"]'),
    cvvInput: () => cy.get('[data-testid="cvv-input"]'),
    placeOrderButton: () => cy.get('[data-testid="complete-payment"]'),
    errorMessage: () => cy.get('.error-message'),
  };
}

export default new PaymentPage();
