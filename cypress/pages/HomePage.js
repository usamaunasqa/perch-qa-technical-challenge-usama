class HomePage {
    elements = {
        mainContent: () => cy.get('[data-testid="home-page"]'),
        productsGrid: () => cy.get('.products-grid'),
        profileButton: () => cy.get('[data-testid="nav-to-profile"]'),
        cartButton: () => cy.get('[data-testid="nav-to-cart"]'),
        searchField: () => cy.get('.search-input'),
        sortButton: () => cy.get('.sort-button'),
        premiumLeatherWatch: () => cy.get('[data-testid="view-product-2"]'),
        wirelessHeadphones: () => cy.get('[data-testid="view-product-3"]'),
        classicWhiteSneakers: () => cy.get('[data-testid="view-product-1"]'),
        premiumLeatherWatchPrice: () => cy.get('[data-testid="price-2"]'),
        wirelessHeadphonesPrice: () => cy.get('[data-testid="price-3"]'),
        classicWhiteSneakersPrice: () => cy.get('[data-testid="price-1"]'),
        backToHomeButton: () => cy.get('.back-to-home'),
        cartHeader: () => cy.get('.cart-header'),
        continueShoppingButton: () => cy.get('[data-testid="continue-shopping"]'),
        productImages: () => cy.get('.product-image')
    };

    visit() {
        cy.visit('/');
    }

    verifyMainContent() {
        this.elements.mainContent().should('be.visible');
    }

    verifyProductsGrid() {
        this.elements.productsGrid().should('be.visible');
    }

    clickProfileButton() {
        this.elements.profileButton().click();
    }

    verifyProfilePageLoaded() {
        cy.url().should('include', '/profile');
    }

    clickBackToHomeButton() {
        this.elements.backToHomeButton().click();
    }

    getAllProductPrices() {
        return cy.get('[data-testid^="price-"]').then(($prices) => {
            return Cypress._.map($prices, (el) => el.innerText.replace('$', ''));
        });
    }

    clickPremiumLeatherWatchViewDetails() {
        this.elements.premiumLeatherWatch().click();
    }

    verifyProductImages() {
    this.elements.productImages().should('have.length', 3).each(($el) => {
      cy.wrap($el).should('be.visible');
    });
  }

}

export default new HomePage();
