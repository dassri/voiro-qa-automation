# QA Quality KPIs and Metrics

## 1. Automation Coverage %

**Definition:** Percentage of total test scenarios that are automated.

**Formula:** (Automated Tests / Total Tests) x 100

**Current Baseline:**

- Total test scenarios identified: 14
- Automated test scenarios: 14
- **Coverage: 100%**

  Coverage includes:

  Login functionality
  Validation checks
  Admin navigation
  User creation flow
  Search functionality
  AI edge cases

---

## 2. Test Execution Time

**Definition:** Total time taken to run the full test suite.

**Current Baseline:**

- Number of tests: 14
- Average time per test: ~6–10 seconds
- **Estimated total execution time: ~2–3 minutes**

  Execution time includes:

  Browser launch
  Login steps
  Form validation checks
  User creation workflow
  Search verification

---

## 3. Defect Detection Rate

**Definition:** Number of defects caught by the test suite
during development.

**Current Baseline:**

- Defects caught during assignment development: 5
  1.Incorrect locator for Username search field
  2.Duplicate username causing test failure
  3.Employee Name autocomplete validation issue
  4.Toast message locator timing issue
  5.Incorrect selector for validation messages

  These defects improved:
  Locator stability
  Test reliability
  Data uniqueness strategy
  Validation coverage

---

## 4. KPI Dashboard Plan

To track these KPIs in a real release cycle I would use:

### Tools:

- **Playwright HTML Reporter** — for test results per run
- **GitHub Actions** — for CI/CD pipeline metrics
- **Grafana + InfluxDB** — for visual KPI dashboard
- **Slack Webhooks** — for instant team notifications

### Dashboard Metrics to Track:

- Pass rate trend over time
- Average execution time per release
- Number of defects caught per sprint
- Flaky test count and history

### Process:

After every CI/CD run, test results are automatically
parsed and pushed to the dashboard so the entire team
has real time visibility into test health.

### Final KPI Summary:

| KPI                 | Value        |
| ------------------- | ------------ |
| Automation Coverage | 100%         |
| Total Tests         | 14           |
| Execution Time      | ~2–3 minutes |
| Defects Identified  | 5            |
| CI/CD Integration   | Implemented  |
