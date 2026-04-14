import { test, expect } from '@playwright/test';
import { CreateReportPage } from '../pages/CreateReportPage';
import testData from '../test-data/reportData.json';

test.describe('OrangeHRM - Login & Report Feature Tests', () => {

  // ✅ TEST 1: Login page loads correctly
  test('TC01 - Login page should load correctly', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await expect(page).toHaveURL(/login/);
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  // ✅ TEST 2: Login with valid credentials
  test('TC02 - Login with valid credentials', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await reportPage.login(
      testData.validUser.username,
      testData.validUser.password
    );
    const dashboard = await reportPage.isDashboardVisible();
    expect(dashboard).toBeTruthy();
  });

  // ✅ TEST 3: Login with invalid credentials
  test('TC03 - Login with invalid credentials shows error', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await reportPage.login(
      testData.invalidUser.username,
      testData.invalidUser.password
    );
    const error = await reportPage.getErrorMessage();
    expect(error).toBeTruthy();
  });

  // ✅ TEST 4: Login with empty fields
  test('TC04 - Login with empty fields shows validation', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await reportPage.login(
      testData.emptyUser.username,
      testData.emptyUser.password
    );
    await expect(page.locator('.oxd-input-field-error-message').first()).toBeVisible();
  });

  // ✅ TEST 5: Navigate to Admin panel after login
  test('TC05 - Navigate to Admin panel after login', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await reportPage.login(
      testData.validUser.username,
      testData.validUser.password
    );
    await reportPage.goToAdmin();
    await expect(page).toHaveURL(/viewSystemUsers/);
  });

  // ✅ AI EDGE CASE 1: Very long username
  test('TC06 - AI Edge Case: Very long username', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await reportPage.login(
      testData.edgeCases.longUsername,
      testData.validUser.password
    );
    const error = await reportPage.getErrorMessage();
    expect(error).toBeTruthy();
  });

  // ✅ AI EDGE CASE 2: Special characters in username
  test('TC07 - AI Edge Case: Special characters in username', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await reportPage.login(
      testData.edgeCases.specialChars,
      testData.validUser.password
    );
    const error = await reportPage.getErrorMessage();
    expect(error).toBeTruthy();
  });

  // ✅ AI EDGE CASE 3: SQL Injection attempt
  test('TC08 - AI Edge Case: SQL Injection in username', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await reportPage.login(
      testData.edgeCases.sqlInjection,
      testData.validUser.password
    );
    const error = await reportPage.getErrorMessage();
    expect(error).toBeTruthy();
  });

  // ✅ AI EDGE CASE 4: Only spaces in username
test('TC09 - AI Edge Case: Only spaces in username', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await reportPage.login(
      testData.edgeCases.onlySpaces,
      testData.validUser.password
    );
    await expect(page.locator('.oxd-input-field-error-message, .oxd-alert-content-text').first()).toBeVisible();
  });

  // ✅ AI EDGE CASE 5: Valid username wrong password
  test('TC10 - AI Edge Case: Valid username wrong password', async ({ page }) => {
    const reportPage = new CreateReportPage(page);
    await reportPage.navigate();
    await reportPage.login(
      testData.validUser.username,
      testData.edgeCases.wrongPasswordOnly
    );
    const error = await reportPage.getErrorMessage();
    expect(error).toBeTruthy();
  });
  // ✅ TEST 11: Add User form loads correctly
test('TC11 - Add User form loads correctly', async ({ page }) => {

  const reportPage = new CreateReportPage(page);

  await reportPage.navigate();

  await reportPage.login(
    testData.validUser.username,
    testData.validUser.password
  );

  await reportPage.goToAdmin();

  await reportPage.clickAddUser();

  await expect(page).toHaveURL(/saveSystemUser/);

});


// ✅ TEST 12: Create user with valid data
test('TC12 - Create user with valid data', async ({ page }) => {

  const reportPage = new CreateReportPage(page);

  const uniqueUsername = "TestUser" + Date.now();

  await reportPage.navigate();

  await reportPage.login(
    testData.validUser.username,
    testData.validUser.password
  );

  // go to Admin
  await reportPage.goToAdmin();

  // click Add
  await reportPage.clickAddUser();

  // fill form
  await reportPage.fillAddUserForm(uniqueUsername, "Password123!");

  // save user
  await reportPage.saveUser();

  // verify redirected to user list page
  await expect(page).toHaveURL(/viewSystemUsers/);

});


// ✅ TEST 13: Validation message when required fields are empty
test('TC13 - Validation message when required fields are empty', async ({ page }) => {

  const reportPage = new CreateReportPage(page);

  await reportPage.navigate();

  await reportPage.login(
    testData.validUser.username,
    testData.validUser.password
  );

  await reportPage.goToAdmin();

  await reportPage.clickAddUser();

  await reportPage.saveUser();

  await expect(page.locator('.oxd-input-field-error-message').first()).toBeVisible();

});


// ✅ TEST 14: Verify created user appears in user list
test('TC14 - Verify created user appears in user list', async ({ page }) => {

  const reportPage = new CreateReportPage(page);

  const uniqueUsername = "TestUser" + Date.now();

  await reportPage.navigate();

  await reportPage.login(
    testData.validUser.username,
    testData.validUser.password
  );

  // go to Admin
  await reportPage.goToAdmin();

  // click Add
  await reportPage.clickAddUser();

  // fill form
  await reportPage.fillAddUserForm(uniqueUsername, "Password123!");

  // save user
  await reportPage.saveUser();

  // wait for save to complete
  await page.waitForTimeout(3000);

  // search user
  await reportPage.searchUser(uniqueUsername);

  // verify user appears
  await expect(page.locator('.oxd-table-body')).toContainText(uniqueUsername);

});
});