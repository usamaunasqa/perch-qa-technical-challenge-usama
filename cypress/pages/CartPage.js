// cypress/pages/CartPage.js

class CartPage {
  elements = {
    // Cart Elements
    cartButton: () => cy.get('[data-testid="nav-to-cart"]'),
    emptyCart: () => cy.get('[data-testid="empty-cart"] p'),

    // Product Details
    viewProduct1: () => cy.get('[data-testid="view-product-1"]'),
    viewProduct2: () => cy.get('[data-testid="view-product-2"]'),
    viewProduct3: () => cy.get('[data-testid="view-product-3"]'),
    addToCartButton: () => cy.get('[data-testid="add-to-cart"]'),

    // Cart Page Buttons
    removeProductButton: () => cy.get('.remove-item').first(),
    removeProductButtons: () => cy.get('.remove-item'),
    proceedToCheckout: () => cy.get('[data-testid="proceed-to-checkout"]'),
    continueShoppingButton: () => cy.get('[data-testid="continue-shopping"]'),
    backToCartButton: () => cy.get('[data-testid="back-to-cart"]'),

    // Quantity and Subtotal
    quantityDropdown: () => cy.get('.quantity-select'),
    quantityOptions: () => cy.get('.quantity-select option'),
    subtotal: () => cy.get('[data-testid="subtotal"]'),

    // Multiple Remove Buttons and Prices
    allRemoveButtons: () => cy.get('[data-testid^="remove-"]'),
    itemPrices: () => cy.get('.item-price')
  };

  helpers = {
    selectQuantity: (value) => {
      this.elements.quantityDropdown().select(value);
    },

    getSubtotalValue: () => {
      return CartPage.elements.subtotal().invoke('text').then((text) => parseFloat(text.replace(/[^\d.]/g, '')));
    },

    getItemPriceAtIndex: (index) => {
      return CartPage.elements.itemPrices()
        .eq(index)
        .invoke('text')
        .then((text) => parseFloat(text.replace(/[^\d.]/g, '')));
    },

    clickCartButton: () => {
      CartPage.elements.cartButton().should('be.visible').click();
    },

    clickAddToCart: () => {
      CartPage.elements.addToCartButton().should('be.visible').click();
    },

    clickContinueShopping: () => {
      CartPage.elements.continueShoppingButton().should('be.visible').click();
    },

    clickRemoveProduct: () => {
      CartPage.elements.removeProductButton().should('be.visible').click();
    },

    verifyCartIsEmpty: () => {
      CartPage.elements.emptyCart().should('contain.text', 'Your cart is empty');
    }
  };
}

export default new CartPage();
