class ProductPage {
  elements = {
    viewProduct1: () => cy.get('[data-testid="view-product-1"]'),
    viewProduct2: () => cy.get('[data-testid="view-product-2"]'),
    viewProduct2: () => cy.get('[data-testid="view-product-3"]'),
    addToCartButton: () => cy.get('[data-testid="add-to-cart"]'),
  quantitySelector: () => cy.get('[data-testid="quantity-selector"]'),
    quantityOptions: () => cy.get('.quantity-select option'),
    productPrice: () => cy.get('[data-testid="product-price"]'),
    backToProductsButton: () => cy.get('[data-testid="back-to-products"]'),
    productDetailImage: () => cy.get('.product-detail-image'),
    productName: () => cy.get('[data-testid="product-name"]'),
    productDescription: () => cy.get('[data-testid="product-description"]')
  }
}

export default new ProductPage();