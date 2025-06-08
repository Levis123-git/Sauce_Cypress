import {elements as el} from "./LoginElements"

class Login {

    loginSucesso(username, password) {
        cy.get(el.usernameField).type(username)
        cy.get(el.passwordField).type(password)
        cy.get(el.btnSubmit).click()
        cy.url().should('to.have','/inventory')
    }
    loginNegativo(username, password, msgEsperada) {
        cy.get(el.usernameField).type(username)
        cy.get(el.passwordField).type(password)
        cy.get(el.btnSubmit).click()
        if(msgEsperada==='Epic sadface: Username and password do not match any user in this service'){
            cy.get(el.errorMessage).should('contain.text', msgEsperada)
        }else if(msgEsperada==='Epic sadface: Username is required'){
            cy.get(el.errorMessage).should('contain.text', msgEsperada)
        }
    }   
    loginCamposEmBranco(msgEsperada){
        cy.get(el.btnSubmit).click()
        cy.get(el.errorMessage).should('contain.text', msgEsperada)

    }

}

export default new Login()