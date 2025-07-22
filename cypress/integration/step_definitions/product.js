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

Then('I store the original product price', () => {
  ProductPage.elements.productPrice().invoke('text').then((text) => {
    originalPrice = parseFloat(text.replace(/[^0-9.-]+/g, ''));
  });
});

When('I change quantity to 3', () => {
    cy.get('[id="quantity"]').select('3')
});

Then('the displayed product price should equal original price multiplied by quantity', () => {
  const expectedPrice = (originalPrice * quantity).toFixed(2);
  
  ProductPage.elements.productPrice().invoke('text').then((text) => {
    const actualPrice = parseFloat(text.replace(/[^0-9.-]+/g, '')).toFixed(2);
    
    expect(actualPrice).to.eq(expectedPrice);
  });
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
