🧪 Voiro QA Automation — OrangeHRM User Management

Automated test suite for the User Management (Admin module) feature using Playwright on a live application.

    🎯 Tech Stack
    🟢 Playwright — End-to-end testing framework
    🔵 TypeScript — Programming language
    🟣 GitHub Actions — CI/CD pipeline
    🟠 Page Object Model (POM) — Design pattern
    🤖 AI Edge Case Testing — Intelligent test scenarios

📁 Project Structure
voiro-qa-automation/
├── tests/ # Test specification files
├── pages/ # Page Object Model classes
├── test-data/ # Test data in JSON format
├── .github/workflows/ # CI/CD configuration
├── playwright.config.ts # Playwright configuration
├── package.json # Project dependencies
└── README.md # Project documentation

⚙️ Setup Instructions
🟢 Step 1 - Clone the repository
git clone "https://github.com/dassri/voiro-qa-automation"
cd voiro-qa-automation

🔵 Step 2 - Install dependencies
npm install

🟣 Step 3 - Install Playwright browsers
npx playwright install

🟠 Step 4 - Run tests
npx playwright test

Run specific test:
npx playwright test -g TC12

📊 Step 5 - View HTML test report
npx playwright show-report

🌐 Application Under Test
Live Application used for automation:

        👉 https://opensource-demo.orangehrmlive.com

Module Covered:
Admin
User Management
Add User
Search User
Login functionality

✅ Test Cases Covered

🔐 Login Feature
✅ TC01: Login page loads correctly
✅ TC02: Login with valid credentials
✅ TC03: Login with invalid credentials
✅ TC04: Login validation for empty fields

👤 User Management Feature (Admin Module)
✅ TC05: Navigate to Admin module after login
✅ TC12: Create user with valid data
✅ TC13: Validation message when required fields are empty
✅ TC14: Verify created user appears in user list

🤖 AI Edge Case Scenarios
✅ TC06: Very long username
✅ TC07: Special characters in username
✅ TC08: SQL injection attempt
✅ TC09: Only spaces in username
✅ TC10: Valid username with wrong password
✅ TC11: Duplicate username handling using dynamic username generation

AI-based test scenarios help validate system robustness against unexpected or malicious inputs.

🧠 Framework Design
Page Object Model (POM)
Reusable methods created inside:
pages/CreateReportPage.ts
Example:
login()
goToAdmin()
clickAddUser()
fillAddUserForm()
saveUser()
searchUser()

Benefits:
Code reusability
Easy maintenance
Clean test structure
Scalable framework

🔁 CI/CD Integration
GitHub Actions automatically runs tests on every push to main branch.

Workflow file:
.github/workflows/ci.yml

Pipeline steps:
Install dependencies
Install Playwright browsers
Execute tests
Upload HTML report artifact

📊 Test Report
Playwright HTML report includes:
Passed tests
Failed tests
Screenshots
Error logs
Execution time
Example:
npx playwright show-report
