## **Agri Exim Uganda Limited - Cypress JavaScript Automation** ##

## **Environment/Testing bed Setup** ##

1). Download and install node.js. 

2). Download and install visual code or any text/code editor of your choice.

3). Create a new folder(AgriExim_CypressPOMJavaScript) for the project and open in visual code.

4). Open cmd/terminal then execute below command.

	- npm -i init -->Creates package.json file.

5). To install Cypress.

	- npm install cypress --save --dev

6). Start cypress.

	-npx cypress open or node_modules/.bin/cypress open

## **Page Object Model(P.O.M)** ##	

1) Create Pages folder under the cypress.

		Under the pages folder, create javascript(.js) files with the follwing;

			(i)- Create locators classes.

			(ii)- Create Action classes.

2) Create the tests folder the e2e folder

		Under the pages folder, create Cypress/javascript(cy.js) files with the follwing;

			(i)- Create object of page class.

			(ii)- Create Assertions.

## **Commands.JS + Mochawesome HTML Report + Custom Scripts +Headless Mode** ##	

## **E2E Test using GitHub Actions+Parallel Execution using GitHub Actions** ##

## **Uploading Report Folders to CI/CD** ##	

## **Slack Integration -- Sharing CI/CD Build Info in Slack Channel** ##	