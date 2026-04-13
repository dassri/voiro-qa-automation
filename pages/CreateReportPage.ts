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

  // Check if dashboard is visible after login
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

  // Get error message
  async getErrorMessage() {
    return await this.page.textContent('.oxd-alert-content-text');
  }

  // Navigate to Admin page
  async goToAdmin() {
    await this.page.click('text=Admin');
  }

  // Search for a user
  async searchUser(username: string) {
    await this.page.fill('input[placeholder="Type for hints..."]', username);
    await this.page.click('button[type="submit"]');
  }
}