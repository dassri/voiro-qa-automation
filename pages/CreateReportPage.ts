import { Page } from '@playwright/test';

export class CreateReportPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to login page
  async navigate() {
    await this.page.goto('/web/index.php/auth/login');
  }

  // Login with credentials
  async login(username: string, password: string) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[type="password"]', password);
    await this.page.click('button[type="submit"]');
  }
  // Navigate to Admin page
  async goToAdmin() {

  await this.page.getByRole('link', { name: 'Admin' }).click();

}

  // Check dashboard visible
  async isDashboardVisible() {
    try {
      await this.page.waitForURL(/dashboard/, { timeout: 10000 });
      return true;
    } catch {
      return false;
    }
  }

  // Logout
  async logout() {
    await this.page.click('.oxd-userdropdown-tab');
    await this.page.click('text=Logout');
  }

  // error message
  async getErrorMessage() {
    return await this.page.textContent('.oxd-alert-content-text');
  }

  // search user
async searchUser(username: string) {

  // username search field (top filter)
  await this.page.locator('input').nth(1).fill(username);

  // click search button
  await this.page.getByRole('button', { name: 'Search' }).click();

}

  

  // click Add button
  async clickAddUser() {
    await this.page.click('button:has-text("Add")');
  }

  // fill Add User form
 async fillAddUserForm(username: string, password: string) {

  // User Role
  await this.page.locator('.oxd-select-text').first().click();
  await this.page.locator('.oxd-select-dropdown div').nth(1).click();

  // Employee Name
  await this.page.locator('input[placeholder="Type for hints..."]').fill('P');
  await this.page.waitForTimeout(2000);
  await this.page.keyboard.press('ArrowDown');
  await this.page.keyboard.press('Enter');

  // Status
  await this.page.locator('.oxd-select-text').nth(1).click();
  await this.page.locator('.oxd-select-dropdown div').nth(1).click();

  // Username
  await this.page.locator('input').nth(2).fill(username);
  // Password
  await this.page.locator('input[type="password"]').nth(0).fill(password);

  // Confirm Password
  await this.page.locator('input[type="password"]').nth(1).fill(password);

}

  // click Save
  async saveUser() {
    await this.page.click('button:has-text("Save")');
  }

  // success toast visible
  async successToastVisible() {
    return await this.page.locator('.oxd-toast').isVisible();
  }
}