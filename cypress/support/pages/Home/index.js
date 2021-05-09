const el = require('./elements').ELEMENTS;

class Home{
    acessarWebSite(){
        cy.visit('http://automationpractice.com/');
    }
    pesquisarProduto(){ 
        cy.get(el.id).type('Faded Short Sleeve');
        cy.get(el.buttonSearch).click();
    }
}
export default new Home();
