
const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;

    // Locator
    this.heading = page.getByRole('heading', {
      name: /playwright/i,
    }).first();
  }

  // Navigation
  async open() {
    await this.page.goto('https://playwright.dev/', {
      waitUntil: 'networkidle',
    });
  }

  // Validation
  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  // Screenshot
  async takeScreenshot(path = 'screenshots/homepage.png') {
    await this.page.screenshot({
      path,
      fullPage: true,
    });
  }
}

module.exports = { HomePage };
