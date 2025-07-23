# Findings

This document outlines the bugs and improvement suggestions identified during the QA process with detailed steps to reproduce.

## Bugs

### Bug 1: Sorting Not Working on Home Page

**Steps to Reproduce:**
1. Visit the Home Page.
2. Locate the "Sort by Price" button.
3. Click the "Sort by Price" button once — expected: products should be sorted in ascending order by price.
4. Click the "Sort by Price" button again — expected: products should be sorted in descending order by price.
5. **Actual Result:** Product does not sorted properly.


### Bug 2: Cancel Button Saves Data on Profile Page

**Steps to Reproduce:**
1. Navigate to the Profile Page.
2. Click on the "Edit Profile" button.
3. Modify the "Name" and/or "Email" field.
4. Click on the "Cancel" button.
5. **Expected Result:** Modified data should be discarded, and previous data should remain.
6. **Actual Result:** Modified data is saved even after canceling.

---

## Improvements

### Imrpovement 1: Quantity Dropdown Contains Invalid Option

**Steps to Reproduce:**
1. Go to the Home Page and click "View Details" button on any product.
2. Click on "Add to Cart".
3. Locate the quantity dropdown against the product on cart page.
4. Click to see the quantity options.
5. **Expected Result:** The list should start from 1.
6. **Actual Result:** An option with value `0` is available in the dropdown, which is not valid for product quantity.

### Improvement 2: Duplicate Continue Shopping Button

**Steps to Reproduce:**
1. Add one or more products to the Cart.
2. Go to the Cart Page.
3. Remove all products from the cart.
4. Observe the appearance of an additional "Continue Shopping" button in the empty cart div.
5. **Improvement Suggestion:** Only one continue button should be visible; remove the duplicate.


### Improvement 3: Inconsistent Back Button Placement

**Steps to Reproduce:**
1. Navigate to different pages (Product Page, Profile Page, etc.).
2. Observe the location of the "Back" button on each page.
3. **Observation:** On the Product Page, it is on the top-left; on the Profile Page, it is on the top-right.
4. **Improvement Suggestion:** Maintain a consistent back button position across the app, preferably top-left.


### Improvement 4: Edit Profile & Checkout Button Styling

**Steps to Reproduce:**
1. Visit the Profile Page and observe the "Edit Profile" button.
2. Also, Go to cart page (when a product is added in the cart) and observe the "Proceed to Checkout" button.
3. **Observation:** Both buttons lack visual emphasis.
4. **Improvement Suggestion:** Update the design to make these buttons more appealing and prominent.


### Improvement 5: Add Size Option for Applicable Products

**Steps to Reproduce:**
1. Open the detail page for products like sneakers.
2. Check if there is any option to select product size.
3. **Observation:** No size selection available.
4. **Improvement Suggestion:** Add a dropdown/button to select size for products where applicable.


### Improvement 6: Profile Button Placement

**Steps to Reproduce:**
1. Open the Home Page.
2. Locate the Profile button.
3. **Observation:** It is not in the standard top-right corner location.
4. **Improvement Suggestion:** Move the Profile button to the top-right for consistency with common UI/UX patterns.


### Improvement 7: Add to Cart Button Design

**Steps to Reproduce:**
1. Go to a Product Page.
2. Locate the "Add to Cart" button.
3. **Observation:** Button appears oversized and lacks styling.
4. **Improvement Suggestion:** Reduce button size and apply modern design styling for better integration.


### Improvement 8: Improve Spacing Between Labels

**Steps to Reproduce:**
1. Open a Product Detail Page.
2. Observe the spacing between the product image and heading/description/quantity selector.
3. **Observation:** There is little to no spacing between elements.
4. **Improvement Suggestion:** Add padding/margin for clarity and better layout.


### Improvement 9: Missing Product Page Heading

**Steps to Reproduce:**
1. Open any Product Page.
2. Check if there is a heading/title at the top.
3. **Observation:** Heading is missing.
4. **Improvement Suggestion:** Add a clear and styled product heading to improve user navigation and context.


### Improvement 10: No Success Feedback on Profile Update

**Steps to Reproduce:**
1. Go to Profile Page.
2. Click "Edit Profile", update fields, and click "Save".
3. **Observation:** No success message is shown.
4. **Improvement Suggestion:** Display a success alert or toast to confirm that changes were saved successfully.


### Improvement 11: Expiry Date Field Allows Past Year

**Steps to Reproduce:**
1. Navigate to the Payment Info Page.
2. Enter an expiry date like `09/20` (a past year).
3. Click "Place Order".
4. **Observation:** The form accepts past expiry dates.
5. **Improvement Suggestion:** Add validation to block expired years in the expiry field.


### Improvement 12: Country Field Should Be Dropdown

**Steps to Reproduce:**
1. Go to the Delivery Address Page.
2. Locate the "Country" field.
3. **Observation:** It is a free text input.
4. **Improvement Suggestion:** Replace with a country dropdown to prevent typos and invalid inputs.


### Improvement 13: Product Images Not Responsive

**Steps to Reproduce:**
1. Open the site on devices of varying screen sizes (desktop, tablet, mobile).
2. Check product images on the Home Page, Product Page, and Profile Page.
3. **Observation:** Images do not resize properly or overflow the container.
4. **Improvement Suggestion:** Ensure all product images are responsive and scale correctly with screen size.

### Improvement 14: Button Color Inconsistency Across Pages

**Steps to Reproduce:**
1. Navigate to the following pages and observe the buttons mentioned:
   - Home Page → "Profile" button.
   - Profile Page → "Back to Home" button.
   - Product Page → "Back to Product" button.
   - Cart Page → "Continue Shopping" button.
   - Address Page → "Back to Cart" button.
   - Payment Page → "Back to Address" button.
   - Success Page → "Continue Shopping" and "View Your Order" buttons.
2. **Observation:** Button colors and styles are inconsistent.
3. **Improvement Suggestion:** Unify the button color scheme across all pages to maintain consistent UI. Back buttons should have a visually distinct style (e.g., outlined, prominent color).


### Improvement 15: Quantity Label Should Be Bold in Confirmed Orders Section

**Steps to Reproduce:**
1. Go to the Profile Page.
2. Scroll down to view the Confirmed Orders section.
3. Observe the label for "Quantity" against each ordered product.
4. **Observation:** The quantity count is displayed in regular text.
5. **Improvement Suggestion:** Make the quantity count bold to match the visual emphasis of other key labels (like product name, price).


### Improvement 16: Search Should Start After Minimum 3 Characters

**Steps to Reproduce:**
1. Go to the Home Page.
2. Start typing in the search bar.
3. Enter fewer than 3 characters (e.g., "a", "ab").
4. **Observation:** Search is triggered with each character entered, even with less than 3 characters.
5. **Improvement Suggestion:** Optimize search functionality by triggering the filter/search only after the user has entered at least 3 characters. This will improve performance, especially when product count is high.
