# AI Prompting Strategy Document

## Tool Used

Claude AI (Anthropic) and ChatGPT

## Strategy Overview

AI tools were used to generate initial test cases, identify edge cases, and assist in building the overall automation strategy for the OrangeHRM User Management and Login feature.

AI helped with:

Test case generation
Edge case identification
Page Object Model structure
Locator strategy suggestions
CI/CD workflow setup
Improving test reliability

---

## Prompts Used

### Prompt 1 — Generate Test Cases

**Prompt:**
"Given a Login feature and User Management module (Add User) in an HRM application — generate test cases covering happy path, negative scenarios, and validation checks."

**Output:**
AI generated test cases covering:

Login page validation
Valid login scenario
Invalid login credentials
Empty field validation
Navigation to Admin module
User creation workflow

**Edits Made:**
Converted AI-generated test cases into Playwright test scripts using:

TypeScript
Page Object Model (POM)
JSON-based test data

---

### Prompt 2 — Generate Edge Cases

**Prompt:**
"For a login form and user creation form, generate edge case test scenarios beyond happy path and basic validation."

**Output:**
AI suggested the following edge cases:

Very long username exceeding character limit
Special characters in username field
SQL injection attempt in login form
Username with only spaces
Valid username with incorrect password
Duplicate username validation scenario

**Edits Made:**
Mapped each edge case to actual test data in:
test-data/reportData.json

Implemented edge case scenarios in:
tests/createReport.spec.ts

Added dynamic username generation logic to avoid duplicate user failures.

---

### Prompt 3 — Test Data Strategy using AI

**Prompt:**
"Generate structured test data for login and user creation scenarios in JSON format."

**Output:**
AI suggested structured JSON format for:

valid credentials
invalid credentials
empty fields
edge case inputs

**Implementation:**
Created reusable test data file:
test-data/reportData.json

**Benefits:**
Easy maintenance
Reusable test inputs
Separation of test logic and data

### Prompt 4 — AI-assisted CI/CD Strategy

**Prompt:**

"How can AI help improve CI/CD test reporting?"

**Output:**

AI suggested using language models to:

Summarize Playwright HTML reports
Highlight failed tests automatically
Generate release summary text
Identify flaky test patterns

**Example future implementation:**

After CI execution:
"14 tests executed. 11 passed. 3 failed due to locator improvements needed. Core login flow working as expected."

---

## Summary

AI tooling helped accelerate:

Test case design
Edge case identification
Test data structuring
Framework architecture decisions

Approximately 50–60% of initial planning effort was optimized using AI assistance.

All AI-generated outputs were:

reviewed manually
validated against live application behaviour
adjusted to ensure reliability
