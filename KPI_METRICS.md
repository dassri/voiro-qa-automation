# QA Quality KPIs and Metrics

## 1. Automation Coverage %

**Definition:** Percentage of total test scenarios that are automated.

**Formula:** (Automated Tests / Total Tests) x 100

**Current Baseline:**

- Total test scenarios identified: 10
- Automated test scenarios: 10
- **Coverage: 100%**

---

## 2. Test Execution Time

**Definition:** Total time taken to run the full test suite.

**Current Baseline:**

- Number of tests: 10
- Average time per test: ~3 seconds
- **Estimated total execution time: ~30 seconds**

---

## 3. Defect Detection Rate

**Definition:** Number of defects caught by the test suite
during development.

**Current Baseline:**

- Defects caught during assignment development: 3
  1. Missing validation on empty report name
  2. Special characters not handled properly
  3. Duplicate report name not flagged

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
