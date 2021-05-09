const el = require('./elements').ELEMENTS;

class Product{
    adicionarProduto(){
        cy.route('POST', '**').as('postInsert');
        cy.get(el.produto).click();
    }
    validarInsercaoProduto(){ 
        cy.wait('@postInsert').then((xhr) =>{
        expect(xhr.status).be.eq(200);
        expect(xhr.response.body.id).is.not.null;
        })
    }
    irParaCarrinho(){
        cy.contains('Proceed to checkout').click();
    }
}
export default new Product();
