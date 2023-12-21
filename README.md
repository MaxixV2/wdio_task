## Summary of Repository

This repository is created for automation testing of Cypress Real World App using the WebDriverIO testing framework. The tests cover various suites including login, account, bank account, and transaction.

## Requirements:

- Node.js 
- npm 
- yarn 

## Steps to Install

1. Install the required dependencies.
   ```bash
   npm install
   ```
   
2. Clone repository with application for testing.
   ```bash
   git clone https://github.com/cypress-io/cypress-realworld-app.git
   ```
   
3. Change directory to install dependencies for web application:
   ```bash
   cd .\cypress-realworld-app\
   ```
   
4. Install the required dependencies for web application.
   ```bash
   yarn install
   ```

5. Run the web application.
   ```bash
    yarn dev
    ```
   
## Steps to Launch Tests

To run the tests, you may use the following commands:

### Run All Tests
```bash
npm run test
```

### Run Tests in Firefox
```bash
npm run test:firefox
```

### Run Tests in Edge
```bash
npm run test:edge
```

### Run Login Suite
```bash
npm run test:suite:login
```

### Run Account Suite
```bash
npm run test:suite:account
```

### Run Bank Account Suite
```bash
npm run test:suite:bank-account
```

### Run Transaction Suite
```bash
npm run test:suite:transaction
```

## Steps to Create the Report

Use the following commands to generate and view the Allure report:

```bash
npm run report
```

Or run the following commands separately:

1. Generate the Allure report.
   ```bash
   npm run report:generate
   ```

2. Open the generated Allure report in the default browser.
   ```bash
   npm run report:open
   ```

Example of report:

![image](https://github.com/MaxixV2/wdio_task/assets/99399536/93c608be-dfd6-430e-979e-87a3c63d5a93)
