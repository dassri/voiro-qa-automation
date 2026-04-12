import { test, expect } from '@playwright/test';
import { CreateReportPage } from '../pages/CreateReportPage';
import testData from '../test-data/reportData.json';

test.describe('Create Report Feature', () => {

  // ✅ TEST 1: Check form loads correctly
  test('TC01 - Create Report form should load correctly', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await reportPage.clickCreateReport();
    await expect(page).toHaveURL(/report-builder/);
  });

  // ✅ TEST 2: Create report with valid data
  test('TC02 - Create report with valid data', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await reportPage.clickCreateReport();
    await reportPage.fillReportName(testData.validReport.name);
    await reportPage.selectDimension(testData.validReport.dimension);
    await reportPage.selectMetric(testData.validReport.metric);
    await reportPage.saveReport();
    const msg = await reportPage.getSuccessMessage();
    expect(msg).toBeTruthy();
  });

  // ✅ TEST 3: Missing required fields validation
  test('TC03 - Show error for missing required fields', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await reportPage.clickCreateReport();
    await reportPage.saveReport();
    const error = await reportPage.getErrorMessage();
    expect(error).toBeTruthy();
  });

  // ✅ TEST 4: Invalid data validation
  test('TC04 - Show error for invalid data', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await reportPage.clickCreateReport();
    await reportPage.fillReportName(testData.edgeCases.specialChars);
    await reportPage.saveReport();
    const error = await reportPage.getErrorMessage();
    expect(error).toBeTruthy();
  });

  // ✅ TEST 5: Created report appears in list
  test('TC05 - Created report appears in report list', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await reportPage.clickCreateReport();
    await reportPage.fillReportName(testData.validReport.name);
    await reportPage.saveReport();
    await expect(page.locator('text=' + testData.validReport.name)).toBeVisible();
  });

  // ✅ AI EDGE CASE 1: Very long report name
  test('TC06 - AI Edge Case: Very long report name', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await reportPage.clickCreateReport();
    await reportPage.fillReportName(testData.edgeCases.longName);
    await reportPage.saveReport();
    const error = await reportPage.getErrorMessage();
    expect(error).toBeTruthy();
  });

  // ✅ AI EDGE CASE 2: Special characters in name
  test('TC07 - AI Edge Case: Special characters in report name', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await reportPage.clickCreateReport();
    await reportPage.fillReportName(testData.edgeCases.specialChars);
    await reportPage.saveReport();
    const error = await reportPage.getErrorMessage();
    expect(error).toBeTruthy();
  });

  // ✅ AI EDGE CASE 3: Duplicate report name
  test('TC08 - AI Edge Case: Duplicate report name', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await reportPage.clickCreateReport();
    await reportPage.fillReportName(testData.edgeCases.duplicateName);
    await reportPage.saveReport();
    const error = await reportPage.getErrorMessage();
    expect(error).toBeTruthy();
  });

  // ✅ AI EDGE CASE 4: Save without selecting dimension
  test('TC09 - AI Edge Case: Missing dimension field', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await reportPage.clickCreateReport();
    await reportPage.fillReportName(testData.validReport.name);
    await reportPage.saveReport();
    const error = await reportPage.getErrorMessage();
    expect(error).toBeTruthy();
  });

  // ✅ AI EDGE CASE 5: Save without selecting metric
  test('TC10 - AI Edge Case: Missing metric field', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await reportPage.clickCreateReport();
    await reportPage.fillReportName(testData.validReport.name);
    await reportPage.selectDimension(testData.validReport.dimension);
    await reportPage.saveReport();
    const error = await reportPage.getErrorMessage();
    expect(error).toBeTruthy();
  });

});