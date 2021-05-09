/// <reference types="cypress"/>

import Home from '../support/pages/Home';
import Result from '../support/pages/Result';
import Product from '../support/pages/Product';

describe('automation', () => {
    it('adicionar produto ao carrinho', () =>{        
        Home.acessarWebSite();
        Home.pesquisarProduto();
        Result.selecionarProduto();
        Product.adicionarProduto();
        Product.validarInsercaoProduto();
        Product.irParaCarrinho();
    });
});

