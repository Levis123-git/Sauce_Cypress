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
    <img src="[https://github.com/user-attachments/assets/178955690/452812845-ac4ee76b-9c73-42cd-ba12-ff31d410b9ec.png](https://private-user-images.githubusercontent.com/178955690/452812845-ac4ee76b-9c73-42cd-ba12-ff31d410b9ec.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk0MTA1NTUsIm5iZiI6MTc0OTQxMDI1NSwicGF0aCI6Ii8xNzg5NTU2OTAvNDUyODEyODQ1LWFjNGVlNzZiLTljNzMtNDJjZC1iYTEyLWZmMzFkNDEwYjllYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYwOFQxOTE3MzVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zZGY3MjE0MzE0NjU0ZDNhNGNlN2RlY2RiNDQzOTgwYTI5NTE0ZTk4M2NmNTE5MDEyMGQxOTczYTNjMmZkZTlhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.bxRtEQocEF9M0pIhdjHD6p4zlcoWJC4VBj5FUBLbeEY)" alt="Teste de Login" width="400">
    <p><em>Execução bem-sucedida do Teste de Login</em></p>
  </div>

  <div style="display: inline-block; text-align: center;">
    <img src="[https://github.com/user-attachments/assets/178955690/452812876-ca416ef4-fbbb-4f53-83ce-562b83329649.png](https://private-user-images.githubusercontent.com/178955690/452812876-ca416ef4-fbbb-4f53-83ce-562b83329649.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk0MTA1MDEsIm5iZiI6MTc0OTQxMDIwMSwicGF0aCI6Ii8xNzg5NTU2OTAvNDUyODEyODc2LWNhNDE2ZWY0LWZiYmItNGY1My04M2NlLTU2MmI4MzMyOTY0OS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYwOFQxOTE2NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05M2M5NzMxMjMyMmRiNjYzOTc2NGJlMjFkMjA2OWJlMTc0ZmUyMGVlMTIyNGFkYjBmNWI5OGRhZmM5MGE1MWQwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.NruDvUdA6VxvyDFMHen3GFDXrTkQi5c2KUqhGisDQPw)" alt="Teste de Compra" width="400">
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





