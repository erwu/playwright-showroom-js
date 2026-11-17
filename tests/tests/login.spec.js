
const { test, expect } = require('@playwright/test');

const loginUrl = 'https://practicetestautomation.com/practice-test-login/';

test('TC01 - Positive Login Test', async ({ page }) => {
  await page.goto(loginUrl);

  await page.locator('#username').fill('student');
  await page.locator('#password').fill('Password123');
  await page.locator('#submit').click();

  // Verify successful login URL
  await expect(page).toHaveURL(/logged-in-successfully/);

  // Verify success message
  await expect(page.locator('body'))
    .toContainText(/Congratulations|successfully logged in/i);

  // Verify Log out link
  await expect(
    page.getByRole('link', { name: 'Log out' })
  ).toBeVisible();
});

test('TC02 - Negative Login Test - Invalid Username', async ({ page }) => {
  await page.goto(loginUrl);

  await page.locator('#username').fill('incorrectUser');
  await page.locator('#password').fill('Password123');
  await page.locator('#submit').click();

  // Verify error message
  await expect(page.locator('#error')).toBeVisible();
  await expect(page.locator('#error'))
    .toHaveText('Your username is invalid!');
});

test('TC03 - Negative Login Test - Invalid Password', async ({ page }) => {
  await page.goto(loginUrl);

  await page.locator('#username').fill('student');
  await page.locator('#password').fill('incorrectPassword');
  await page.locator('#submit').click();

  // Verify error message
  await expect(page.locator('#error')).toBeVisible();
  await expect(page.locator('#error'))
    .toHaveText('Your password is invalid!');
});
