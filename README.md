# 💻 Projeto de Automação de Testes E2E - Swag Labs

Este repositório contém a automação de testes de ponta a ponta (E2E) para o sistema **Swag Labs**, utilizando a ferramenta [Cypress](https://www.cypress.io/)


## 📋 Descrição

O objetivo deste projeto é garantir a qualidade das funcionalidades principais do sistema, testando cenários críticos como login, fluxo de compra e remoção de itens do carrinho, e validação de mensagens de erro e sucesso.

Os testes seguem boas práticas de automação e possuem foco em:

- Verificação de fluxo de login;
- Verificação de fluxo de compra e remoção de itens do carrinho;
- Garantia de funcionalidades essenciais do sistema.

## 🛠️ Tecnologias e Ferramentas

- **Cypress**: Framework para automação de testes de E2E;
- **JavaScript**: Linguagem utilizada nos scripts de teste;
- **Node.js**: Ambiente de execução do JavaScript;
- **Yarn**: Gerenciador de pacotes.


## 🚀 Como Executar o Projeto

###  📌Pré-requisitos

Certifique-se de ter instalado:

- Node.js (v14 ou superior);
- Yarn 

### 👨🏻‍💻 Passos para Configuração

 1. Clone o repositório:
 ```bash
	git clone https://github.com/Levis123-git/Sauce_Cypress.git
```
 2. Entrar na pasta do projeto clonado:
 ```bash
	cd cypress_automation
```
3. Instale as dependências:
 ```bash
	yarn install
```

### 🤖 Executar os Testes:

-  Para abrir o painel interativo do Cypress:
 ```bash
	yarn cypress open
```

-  Para executar os testes no modo headless:
 ```bash
	yarn cypress run
```


## 🧪 Testes Implementados

### Testes de Login

-   **Login com sucesso**:
	-  Preenche os dados de login válidos e verifica a mensagem de sucesso.
	-  Garante que o usuário foi redirecionado corretamente.
        
-   **Não deve realizar Login com Senha incorreta **:    
	-  Tenta logar com senha incorreta e valida a mensagem de erro exibida.

	**Não deve realizar Login com usuario incorreto **:    
	-  Tenta logar com email incorreta e valida a mensagem de erro exibida.
      
-   **Não deve logar com dados em branco**:
	 - Tenta logar sem preecnher credenciais e valida a mensagem obrigatóriedade dos campos.
  - 
### Testes de Compra

-   **Compra com sucesso**:
	-  Insere item no carrinho e preenche os dados corretamente
	-  Garante que o usuário foi redirecionado corretamente.
        
  	**Não deve Realizar compra com dados em branco **:    
	-  Garante que sistema retorna mensagem de obrigatoriedade de credenciais ao tentar comprar sem preenche-las.
      
-   **Deve Remover itens do carrinho**:
	 - Garante que sistema remove itens do carrinho, e validação da ausencia dos itens.
       
			  
    
   
    
    ### 🖼️ Evidência de Testes

    <h3 align="center">🖼️ Evidências de Testes</h3>

<div align="center" style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">

  <div style="display: inline-block; text-align: center;">
    <img src="https://github.com/user-attachments/assets/178955690/452812845-ac4ee76b-9c73-42cd-ba12-ff31d410b9ec.png" alt="Teste de Login" width="400">
    <p><em>Execução bem-sucedida do Teste de Login</em></p>
  </div>

  <div style="display: inline-block; text-align: center;">
    <img src="https://github.com/user-attachments/assets/178955690/452812876-ca416ef4-fbbb-4f53-83ce-562b83329649.png" alt="Teste de Compra" width="400">
    <p><em>Execução bem-sucedida do Teste de Compra</em></p>
  </div>

</div>


## 📦 Dependências Principais

As principais dependências do projeto são:

-   [Cypress](https://www.cypress.io/): Framework de testes.
-   [Yarn](https://yarnpkg.com/): Gerenciador de pacotes.



##  📂 Estrutura do Projeto

A organização do projeto segue a estrutura Page Objects Model:


##  🚀 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias.

## 📌 Notas Gerais
Feito por [Levi Alves] (https://github.com/levis123-git) 😊





