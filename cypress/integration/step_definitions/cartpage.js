import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';
import CartPage from '../../pages/CartPage';

let initialSubtotal = 0;

Given('I am on the Home page', () => {
    HomePage.visit();
    HomePage.elements.mainContent().should('be.visible');
});

Then('I should see the Cart button', () => {
    CartPage.elements.cartButton().should('be.visible');
});

When('I click on the Cart button', () => {
    CartPage.elements.cartButton().click();
});

Then('I should see an empty cart message', () => {
    CartPage.elements.emptyCart().should('contain.text', 'Your cart is empty');
});

When('I click on the View Details button of Product 2', () => {
    CartPage.elements.viewProduct2().click();
});

When('I click on the View Details button of Product 3', () => {
    CartPage.elements.viewProduct3().click();
});

When('I click on the View Details button of Product 1', () => {
    CartPage.elements.viewProduct1().click();
});

Then('I should be navigated to the Product page', () => {
    cy.url().should('include', '/product');
});

Then('I should see the Add to Cart button', () => {
    CartPage.elements.addToCartButton().should('be.visible');
});

When('I click on the Add to Cart button', () => {
    CartPage.elements.addToCartButton().click();
});

Then('I should be navigated to the Cart page', () => {
    cy.url().should('include', '/cart');
    CartPage.elements.removeProductButton().should('be.visible');
});

Then('I should see the Remove Product button', () => {
    CartPage.elements.removeProductButton().should('be.visible');
});

When('I click on the Remove Product button', () => {
    CartPage.elements.removeProductButton().click();
});

Then('I should see the Continue Shopping button', () => {
    CartPage.elements.continueShoppingButton().should('be.visible');
});

When('I click on the Continue Shopping button', () => {
    CartPage.elements.continueShoppingButton().click();
});

Then('I should be navigated to the Home page', () => {
    cy.url().should('not.include', '/cart');
    HomePage.elements.mainContent().should('be.visible');
});

Then('I store the subtotal value', () => {
    CartPage.elements.subtotal().invoke('text').then(text => {
        initialSubtotal = parseFloat(text.replace(/[^0-9.-]+/g, ''));
    });
});

When('I change the quantity to 2', () => {
    CartPage.elements.quantityDropdown().select('2');
});

Then('the subtotal should reflect the updated quantity', () => {
    CartPage.elements.subtotal().invoke('text').then(text => {
        const newSubtotal = parseFloat(text.replace(/[^0-9.-]+/g, ''));
        expect(newSubtotal).to.eq(initialSubtotal * 2);
    });
});

Then('I should see 2 Remove Product buttons', () => {
    CartPage.elements.allRemoveButtons().should('have.length', 2);
});

Then('the subtotal should equal the sum of both item prices', () => {
    const prices = [];
    CartPage.elements.itemPrices().each(($el) => {
        prices.push(parseFloat($el.text().replace(/[^0-9.-]+/g, '')));
    }).then(() => {
        const expectedTotal = prices.reduce((a, b) => a + b, 0);
        CartPage.elements.subtotal().invoke('text').then(text => {
            const actualTotal = parseFloat(text.replace(/[^0-9.-]+/g, ''));
            expect(actualTotal).to.eq(expectedTotal);
        });
    });
});
