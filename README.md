# Voiro QA Automation — Report Builder

Automated test suite for the Create Report feature using Playwright.

## Tech Stack

- Playwright (Testing Framework)
- TypeScript (Language)
- GitHub Actions (CI/CD)

## Project Structure

voiro-qa-automation/
├── tests/ # Test files
├── pages/ # Page Object Model files
├── test-data/ # Test data JSON files
├── .github/workflows/ # CI/CD configuration
├── playwright.config.ts # Playwright configuration
└── README.md # This file

## Setup Instructions

### Step 1 - Clone the repository

git clone <your-repo-url>
cd voiro-qa-automation

### Step 2 - Install dependencies

npm install

### Step 3 - Install Playwright browsers

npx playwright install

### Step 4 - Run tests

npx playwright test

### Step 5 - View test report

npx playwright show-report

## Test Cases Covered

- TC01: Create Report form loads correctly
- TC02: Create report with valid data
- TC03: Missing required fields validation
- TC04: Invalid data validation
- TC05: Created report appears in report list
- TC06: AI Edge Case - Very long report name
- TC07: AI Edge Case - Special characters
- TC08: AI Edge Case - Duplicate report name
- TC09: AI Edge Case - Missing dimension
- TC10: AI Edge Case - Missing metric

## CI/CD

Tests run automatically on every push to main branch via GitHub Actions.
Test reports are uploaded as artifacts after each run.
