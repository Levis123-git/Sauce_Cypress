import { compraElements as el } from "./CompraElements"



class CompraPage {
    //metodo para realizar todo um fluxo de compra
    realizarCompra(firstName, lastName, postalCode, textoEsperado) {

        cy.get(el.primeiroItem).click();
        cy.get(el.btnCarrinho).click();
        cy.get(el.btnCheckout).click();
        cy.get(el.campoFirstName).type(firstName);
        cy.get(el.campoLastName).type(lastName);
        cy.get(el.campoPostalCode).type(postalCode);
        cy.get(el.btnContinue).click();
        cy.get(el.btnFinish).click();
        cy.get(el.textoSucess).should("contain.text", textoEsperado);



    }

    //metodo para realizar todo um fluxo de compra
    realizarCompra2Itens(firstName, lastName, postalCode, textoEsperado) {

        cy.get(el.primeiroItem).click();
        cy.get(el.segundoItem).click();
        cy.get(el.btnCarrinho).click();
        cy.get(el.btnCheckout).click();
        cy.get(el.campoFirstName).type(firstName);
        cy.get(el.campoLastName).type(lastName);
        cy.get(el.campoPostalCode).type(postalCode);
        cy.get(el.btnContinue).click();
        cy.get(el.btnFinish).click();
        cy.get(el.textoSucess).should("contain.text", textoEsperado);



    }

    //metodo para tentativa de compra sem preencher credencial primeiro nome
    tentativaDeCompraFirstNameEmBranco(lastName, postalCode, mensagemEsperada) {

        cy.get(el.primeiroItem).click();
        cy.get(el.btnCarrinho).click();
        cy.get(el.btnCheckout).click();
        cy.get(el.campoLastName).type(lastName);
        cy.get(el.campoPostalCode).type(postalCode);
        cy.get(el.btnContinue).click();
        cy.get(el.errorMessage).should('contain.text', mensagemEsperada);

    }

    //metodo para tentativa de compra sem preencher credencial ultimo nome
    tentativaDeCompraLastNameEmBranco(firstName, postalCode, mensagemEsperada) {

        cy.get(el.primeiroItem).click();
        cy.get(el.btnCarrinho).click();
        cy.get(el.btnCheckout).click();
        cy.get(el.campoFirstName).type(firstName);
        cy.get(el.campoPostalCode).type(postalCode);
        cy.get(el.btnContinue).click();
        cy.get(el.errorMessage).should('contain.text', mensagemEsperada);

    }

    //metodo para tentativa de compra sem preencher credencial codigo postal
    tentativaDeCompraPostalCodeEmBranco(firstName, lastName, mensagemEsperada) {

        cy.get(el.primeiroItem).click();
        cy.get(el.btnCarrinho).click();
        cy.get(el.btnCheckout).click();
        cy.get(el.campoFirstName).type(firstName);
        cy.get(el.campoLastName).type(lastName)
        cy.get(el.btnContinue).click();
        cy.get(el.errorMessage).should('contain.text', mensagemEsperada);

    }
    //metodo para remover item do carrinho
    removerItemDoCarrinho() {
        cy.get(el.primeiroItem).click();
        cy.get(el.btnCarrinho).click();
        cy.get(el.removeItemCart).click();
        cy.get(el.dataItem).should('not.exist')
    }
    //metodo para remover 2 itens do carrinho
    remover2ItensDoCarrinho(nameFirstItem, nameSecondItem) {
        cy.get(el.primeiroItem).click();
        cy.get(el.segundoItem).click();
        cy.get(el.btnCarrinho).click();
        cy.contains(el.cartItem, nameFirstItem)
            .find(el.removeItemCart)
            .click();
        cy.contains(el.cartItem, nameSecondItem)
            .find(el.removeItemCart)
            .click();
        cy.get(el.dataItem).should('not.exist')
    }
}

export default new CompraPage();