class SuccessPage {
  elements = {
    successIcon: () => cy.get('.success-icon'),
    confirmationMessage: () => cy.get('.confirmation-message'),
    viewOrdersButton: () => cy.get('[data-testid="view-orders"]'),
    continueShoppingButton: () => cy.get('[data-testid="continue-shopping"]'),
    orderHistoryTitle: () => cy.get('.orders-card h2'),
    orderItems: () => cy.get('.order-item'),
    productName: () => cy.get('[class="product-name"]'),
  };
}

export default new SuccessPage();
