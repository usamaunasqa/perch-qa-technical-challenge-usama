import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ProductPage from '../../pages/ProductPage';
import HomePage from '../../pages/HomePage';

let originalPrice = 0;
let quantity = 3;


Given('I am on the Home page', () => {
  HomePage.visit();
});

When('I click on the View Details button of Product 1', () => {
  ProductPage.elements.viewProduct1().click();
});

When('I click on the View Details button of Product 2', () => {
  ProductPage.elements.viewProduct2().click();
});

Then('I should be on the Product page', () => {
  cy.url().should('include', '/product');
});

Then('I should see the Add to Cart button', () => {
  ProductPage.elements.addToCartButton().should('be.visible');
});

Then('I should see the Product detail image', () => {
  ProductPage.elements.productDetailImage().should('be.visible');
});

Then('I should see the Product name', () => {
  ProductPage.elements.productName().should('be.visible');
});

Then('I should see the Product description', () => {
  ProductPage.elements.productDescription().should('be.visible');
});

Then('I should see the Back to Products button', () => {
  ProductPage.elements.backToProductsButton().should('be.visible');
});

When('I click on the Back to Products button', () => {
  ProductPage.elements.backToProductsButton().click();
});

Then('I should be navigated back to the Home page', () => {
  cy.url().should('not.include', '/product');
  ProductPage.elements.viewProduct1().should('be.visible');
  ProductPage.elements.viewProduct2().should('be.visible');
});

When('I click on the View Details button of Product 3', () => {
  ProductPage.elements.viewProduct2().click(); // Already mapped to product-3 in POM
});

let savedPrice = 0;

Then('I save the product price', () => {
  ProductPage.elements.productPrice()
    .invoke('text')
    .then((text) => {
      const price = parseFloat(text.replace(/[^\d.]/g, ''));
      cy.wrap(price).as('savedPrice');
    });
});


Then('I update the quantity to 3', () => {
  ProductPage.elements.quantitySelector().select('3');
});

Then('I click on the Add to Cart button', () => {
  ProductPage.elements.addToCartButton().click();
});

Then('I should be on the Cart page', () => {
  cy.url().should('include', '/cart');
});

Then('I verify the subtotal is correct for quantity 3', function () {
  cy.get('@savedPrice').then((price) => {
    const expectedSubtotal = parseFloat((price * 3).toFixed(2));
    ProductPage.elements.subTotal().invoke('text').then((text) => {
      const actualSubtotal = parseFloat(text.replace(/[^\d.]/g, ''));
      cy.log(`Expected: ${expectedSubtotal}, Actual: ${actualSubtotal}`);
      expect(actualSubtotal).to.be.closeTo(expectedSubtotal, 0.01);
    });
  });
});


Then('I should see quantity 3 in the cart', () => {
  ProductPage.elements.quantityCount().should('be.visible');
});
