# AI Prompting Strategy Document

## Tool Used

Claude AI (Anthropic) and ChatGPT

## Strategy Overview

AI tools were used to generate initial test cases, identify edge cases,
and assist in building the overall test plan for the Create Report feature.

---

## Prompts Used

### Prompt 1 — Generate Test Cases

**Prompt:**
"Given a Create Report form with fields: report name, dimensions, metrics,
data sources and filters — generate test cases covering happy path,
negative tests and validation scenarios"

**Output:**
AI generated 8 test cases covering form load, valid data submission,
missing fields, and invalid inputs.

**Edits Made:**
Added Playwright-specific implementation details and POM structure.

---

### Prompt 2 — Generate Edge Cases

**Prompt:**
"Given a Create Report form with fields: report name, dimensions, metrics,
data sources, filters — generate 5 edge case test scenarios beyond
happy path and basic validation"

**Output:**
AI suggested the following edge cases:

1. Very long report name exceeding character limit
2. Special characters and script injection in report name
3. Duplicate report name submission
4. Saving without selecting dimension
5. Saving without selecting metric

**Edits Made:**
Mapped each edge case to actual test data in reportData.json
and implemented in createReport.spec.ts

---

### Prompt 3 — Release Summary Reporting

**Prompt:**
"How would you use AI to automate release summary reporting
for a QA test suite?"

**Output:**
AI suggested using LLM APIs to:

- Parse test result XML/HTML reports
- Summarize pass/fail trends
- Generate natural language release notes
- Send automated Slack/email notifications

**How I would implement this:**
After each CI/CD run, pipe the Playwright HTML report into an
AI API call that generates a plain English summary like:
"10 tests ran. 8 passed. 2 failed in edge case scenarios.
No critical path failures detected."

---

## Summary

AI tooling saved approximately 60% of initial test planning time.
All AI outputs were reviewed, edited and validated manually before
being added to the test suite.
