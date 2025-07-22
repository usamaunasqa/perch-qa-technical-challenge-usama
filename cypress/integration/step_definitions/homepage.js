import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';

Given('I am on the homepage', () => {
    HomePage.visit();
});

Then('I should see the main content', () => {
    HomePage.verifyMainContent();
});

Then('I should see the full list of products', () => {
    HomePage.verifyProductsGrid();
    HomePage.elements.premiumLeatherWatch().should('be.visible');
    HomePage.elements.wirelessHeadphones().should('be.visible');
    HomePage.elements.classicWhiteSneakers().should('be.visible');
});

Then('I should see the Profile button', () => {
    HomePage.elements.profileButton().should('be.visible');
});

When('I click on the Profile button', () => {
    HomePage.clickProfileButton();
});

Then('I should be navigated to the Profile page', () => {
    HomePage.verifyProfilePageLoaded();
});

Then('I should see the Back to Home button', () => {
    HomePage.elements.backToHomeButton().should('be.visible');
});

When('I click on the Back to Home button', () => {
    HomePage.clickBackToHomeButton();
});

Then('I should be navigated back to the Home page', () => {
    HomePage.verifyMainContent();
});

Then('I should see the Profile button again', () => {
    HomePage.elements.profileButton().should('be.visible');
});

When('I type {string} in the search field', (searchTerm) => {
    HomePage.elements.searchField().clear().type(searchTerm);
});

Then('Only "Wireless Headphones" product should be visible', () => {
    HomePage.elements.wirelessHeadphones().should('be.visible');
});

Then('"Premium leather watch" product should not be visible', () => {
    HomePage.elements.premiumLeatherWatch().should('not.be.exist');
});

Then('"Classic white sneakers" product should not be visible', () => {
    HomePage.elements.classicWhiteSneakers().should('not.be.exist');
});

When('I clear the search field', () => {
    HomePage.elements.searchField().clear();
});

Then('I should see the full list of products', () => {
    HomePage.elements.premiumLeatherWatch().should('be.visible');
    HomePage.elements.wirelessHeadphones().should('be.visible');
    HomePage.elements.classicWhiteSneakers().should('be.visible');
});

Then('I should see the Sort button', () => {
    HomePage.elements.sortButton().should('be.visible');
});

let pricesBeforeSort = [];

And('I store the prices of products before sorting', () => {
    HomePage.getAllProductPrices().then((prices) => {
        pricesBeforeSort = prices.map(Number);
        expect(pricesBeforeSort.length).to.equal(3);
    });
});

When('I click on the Sort button', () => {
    HomePage.elements.sortButton().click();
});

Then('Products should be sorted by price ascending', () => {
    HomePage.getAllProductPrices().then((sortedPrices) => {
        const sortedAsc = [...sortedPrices].map(Number).sort((a, b) => a - b);
        expect(sortedPrices.map(Number)).to.deep.equal(sortedAsc);
    });
});

Then('Products should be sorted by price descending', () => {
    HomePage.getAllProductPrices().then((sortedPrices) => {
        const sortedDesc = [...sortedPrices].map(Number).sort((a, b) => b - a);
        expect(sortedPrices.map(Number)).to.deep.equal(sortedDesc);
    });
});

When('I click on the View Details button of Premium Leather Watch', () => {
  HomePage.clickPremiumLeatherWatchViewDetails();
});

Then('I should be navigated to the product detail page for product 2', () => {
  cy.url().should('include', '/product/2');
});

Then('I should see the Back to Products button', () => {
  cy.get('[data-testid="back-to-products"]').should('be.visible');
});

When('I click on the Back to Products button', () => {
  cy.get('[data-testid="back-to-products"]').click();
});

Then('I should be navigated back to the Home page', () => {
  cy.url().should('eq', 'http://localhost:3000/');
});

Then('I should see the Profile button', () => {
  HomePage.elements.profileButton().should('be.visible');
});

Then('I should see the Cart button', () => {
  HomePage.elements.cartButton().should('be.visible');
});

When('I click on the Cart button', () => {
  HomePage.elements.cartButton().click();
});

Then('I should be navigate to the Cart page', () => {
  cy.url().should('include', '/cart');
});

Then('I should see the Cart header', () => {
  HomePage.elements.cartHeader().should('be.visible');
});

Then('I should see the Continue Shopping button', () => {
  HomePage.elements.continueShoppingButton().should('be.visible');
});

When('I click on Continue Shopping button', () => {
  HomePage.elements.continueShoppingButton().eq(1).click();
});


Then('I should be navigated back to the Home page', () => {
  cy.url().should('eq', 'http://localhost:3000/');
});

Then('I should see the product images', () => {
  HomePage.verifyProductImages();
});


