import LoginPage from "../pages/login/LoginPage"
import CompraPage from "../pages/compra/compraPage"



describe('CompraTests', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
        LoginPage.loginSucesso('standard_user', 'secret_sauce')
    });

    afterEach(() => {
        // Exemplo: limpar localStorage/sessionStorage se necessário
        cy.clearLocalStorage();
        cy.window().then((win) => win.sessionStorage.clear());
    });
    
    it('Deve Realizar Compra Com Sucesso', () => {
        CompraPage.realizarCompra("User", "Test", "06463260", "THANK YOU FOR YOUR ORDER");
    })

    it('Deve Realizar Compra de 2 Itens Com Sucesso',()=>{
        CompraPage.realizarCompra2Itens("User", "Test", "06463260", "THANK YOU FOR YOUR ORDER");
    })

    it('Não Deve Comprar First Name Em Branco', () => {
        CompraPage.tentativaDeCompraFirstNameEmBranco("Teste", "06463260", "Error: First Name is required");
    })

    it('Não Deve Comprar Last Name Em Branco', () => {
        CompraPage.tentativaDeCompraLastNameEmBranco("User", "06463260", "Error: Last Name is required");
    })

    it('Não Deve Comprar Cep Em Branco', () => {
        CompraPage.tentativaDeCompraPostalCodeEmBranco("User", "Teste", "Error: Postal Code is required");
    })

    it('Deve Remover Item Do Carrinho', () => {
        CompraPage.removerItemDoCarrinho();
    })

    it('Deve Remover 2 Itens Do Carrinho',()=>{
        CompraPage.remover2ItensDoCarrinho("Sauce Labs Backpack","Sauce Labs Bike Light");
    })


})