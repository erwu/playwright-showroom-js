
const { test, expect } = require('@playwright/test');

test('TC01 - Positive Login Test', async ({ page }) => {

  // Open login page
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Enter username
  await page.locator('#username').fill('student');

  // Enter password
  await page.locator('#password').fill('Password123');

  // Click Submit
  await page.locator('#submit').click();

  // Verify successful login URL
  await expect(page).toHaveURL(
    /practicetestautomation\.com\/logged-in-successfully\//
  );

  // Verify success message
  await expect(page.locator('body'))
    .toContainText(/Congratulations|successfully logged in/i);

  // Verify Log out button
  await expect(
    page.getByRole('link', { name: 'Log out' })
  ).toBeVisible();

});
