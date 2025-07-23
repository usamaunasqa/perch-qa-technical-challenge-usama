import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';
import ProfilePage from '../../pages/ProfilePage';

let previousName = '';
let previousEmail = '';

Given('I am on the Home page', () => {
  HomePage.visit();
  HomePage.elements.mainContent().should('be.visible');
});

When('I click on the Profile button', () => {
  HomePage.elements.profileButton().click();
});

Then('I should be navigated to the Profile page', () => {
  cy.url().should('include', '/profile');
});

Then('I should see the Edit Profile button', () => {
  ProfilePage.elements.editProfileButton().should('be.visible');
});

// Save current visible name/email BEFORE editing
When('I remember the current profile name and email', () => {
  ProfilePage.elements.nameOnScreen().invoke('text').then((text) => previousName = text.trim());
  ProfilePage.elements.emailOnScreen().invoke('text').then((text) => previousEmail = text.trim());
});

When('I click on the Edit Profile button', () => {
  ProfilePage.elements.editProfileButton().click();
  ProfilePage.elements.nameField().should('be.visible');
  ProfilePage.elements.emailField().should('be.visible');
});

When('I enter {string} in the name field', (name) => {
  ProfilePage.elements.nameField().clear().type(name);
});

When('I enter {string} in the email field', (email) => {
  ProfilePage.elements.emailField().clear().type(email);
});

When('I click on the Cancel Edit button', () => {
  ProfilePage.elements.cancelEditButton().should('be.visible').click();
});

Then('the displayed name and email should not be updated and should show', () => {
  ProfilePage.elements.nameOnScreen().should('have.text', previousName);
  ProfilePage.elements.emailOnScreen().should('have.text', previousEmail);
});

When('I click on the Save Changes button', () => {
  ProfilePage.elements.saveChangesButton().should('be.visible').click();
});

Then('the displayed name and email should be updated to:', (dataTable) => {
  const expected = dataTable.rowsHash();
  ProfilePage.elements.nameOnScreen().should('have.text', expected.name);
  ProfilePage.elements.emailOnScreen().should('have.text', expected.email);
});

When('I click on the Start Shopping button', () => {
  ProfilePage.elements.startShoppingButton().click();
});

When('I click on the Back to Home button', () => {
  ProfilePage.elements.backToHomeButton().click();
});

Then('I should be navigated to the Home page', () => {
  cy.url().should('not.include', '/profile');
});

Then('I should see 3 product images', () => {
  HomePage.elements.productImages().should('have.length', 3).each(($img) => {
    cy.wrap($img).should('be.visible');
  });
});

Then('I should see the Cart button', () => {
  HomePage.elements.cartButton().should('be.visible');
});
