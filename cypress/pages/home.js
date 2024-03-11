export class homePage{

    weblocators={

    }

    openURL(){
        cy.get(Cypress.env('URL'))
    }
}