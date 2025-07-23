class ProfilePage {
  elements = {
    profileButton: () => cy.get('.nav-button.profile-button'),
    editProfileButton: () => cy.get('[data-testid="edit-profile"]'),
    nameField: () => cy.get('[data-testid="profile-name-input"]'),
    emailField: () => cy.get('[data-testid="profile-email-input"]'),
    saveChangesButton: () => cy.get('[data-testid="save-profile"]'),
    nameOnScreen: () => cy.get('[data-testid="profile-name"]'),
    emailOnScreen: () => cy.get('[data-testid="profile-email"]'),
    backToHomeButton: () => cy.get('[data-testid="back-to-home"]'),
    startShoppingButton: () => cy.get('[data-testid="start-shopping"]'),
    productImages: () => cy.get('.product-image'),
    cartButton: () => cy.get('.nav-button.cart-button'),
    cancelEditButton: () => cy.get('[data-testid="cancel-edit"]')
  }

  visit() {
    cy.visit('/profile');
  }

  clickProfileButton() {
    this.elements.profileButton().click();
  }

  clickEditProfile() {
    this.elements.editProfileButton().click();
  }

  enterProfileDetails(name, email) {
    this.elements.nameField().clear().type(name);
    this.elements.emailField().clear().type(email);
  }

  saveChanges() {
    this.elements.saveChangesButton().click();
  }

  cancelEdit() {
    cy.get('[data-testid="cancel-edit"]').click();
  }
}

export default new ProfilePage();
