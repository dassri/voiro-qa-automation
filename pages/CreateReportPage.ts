import { Page } from '@playwright/test';

export class CreateReportPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to Report Builder
  async navigate() {
    await this.page.goto('/report-builder');
  }

  // Click Create Report button
  async clickCreateReport() {
    await this.page.click('[data-testid="create-report-btn"]');
  }

  // Fill report name
  async fillReportName(name: string) {
    await this.page.fill('[data-testid="report-name"]', name);
  }

  // Select dimension
  async selectDimension(dimension: string) {
    await this.page.selectOption('[data-testid="dimension"]', dimension);
  }

  // Select metric
  async selectMetric(metric: string) {
    await this.page.selectOption('[data-testid="metric"]', metric);
  }

  // Click Save button
  async saveReport() {
    await this.page.click('[data-testid="save-btn"]');
  }

  // Get success message
  async getSuccessMessage() {
    return await this.page.textContent('[data-testid="success-msg"]');
  }

  // Get validation error message
  async getErrorMessage() {
    return await this.page.textContent('[data-testid="error-msg"]');
  }
}