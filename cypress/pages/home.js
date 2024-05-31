export class homePage{

    weblocators={
        whoarewe:"//h2[contains(text(),'Who we are')]",
        txtwhoarewe:"//p[contains(text(),'At Agri Exim, we pride ourselves on quality organi')]",
        
    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    checkwhoarewe(){
        const waw=cy.get(this.weblocators.whoarewe);
        waw.should('be.visible');
    }

    checktxtwhoarewe(){
        let exptxtwam='At Agri Exim, we pride ourselves on quality organic and natural sourced straight from our industrious farmers across the globe. With sustainability as our foundation, we grow, harvest, and process premium non-GMO organic and natural  products in the fairest of conditions. Our values manifest themselves in everything that we do – from processing goods to delivering them worldwide.';
        cy.get(this.weblocators.txtwhoarewe).then((x)=>{
            let actName=x.text();
            expect(twam).to.equal(exptxtwam);
        })
        
    }
}