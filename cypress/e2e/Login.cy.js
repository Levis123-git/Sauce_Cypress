import LoginPage from "../pages/login/LoginPage"

describe('Login', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/')
  })

  afterEach(() => {
    // Exemplo: capturar screenshot em caso de falha
    if (this.currentTest.state === 'failed') {
      cy.screenshot(); // ou cy.screenshot(this.currentTest.title)
    }

    // Exemplo: limpar localStorage/sessionStorage se necessário
    cy.clearLocalStorage();
    cy.window().then((win) => win.sessionStorage.clear());
  });

  it('Login Com Sucesso', () => {
    LoginPage.loginSucesso("standard_user", "secret_sauce")
  })
  it('Não Deve Logar Com Senha Invalida', () => {
    LoginPage.loginNegativo('standard_user', 'invalida', 'Epic sadface: Username and password do not match any user in this service')
  })
  it('Não Deve Logar Com Usuario Invalido', () => {
    LoginPage.loginNegativo('invalido', 'secret_sauce', 'Epic sadface: Username and password do not match any user in this service')
  })
  it('Não Deve Logar Com Campos Em Branco', () => {
    LoginPage.loginCamposEmBranco('Epic sadface: Username is required')
  })
})


