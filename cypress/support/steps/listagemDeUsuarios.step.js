import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CadastroPage from "../pages/cadastro.page.js";
import InicialPage from "../pages/inicial.page.js";
const paginaInicial = new InicialPage();

Given("que não existam usuarios cadastrados no sistema", function () {
  cy.intercept("GET", "api/v1/users", { statusCode: 200, body: [] });
});
Given("que existam usuarios cadastrados", function () {
  cy.intercept("GET", "api/v1/users", {
    statusCode: 200,
    fixture: "mocks/listaUsuarios6.json",
  }).as("listaUsers");
});
Given("que existam mais de 6 usuarios cadastrados", function () {
  cy.intercept("GET", "api/v1/users", {
    statusCode: 200,
    fixture: "mocks/listaUsuarios18.json",
  }).as("listaUsers");
});

When("acesso a pagina de listagem de usuario", function () {
  cy.visit("https://rarocrud-frontend-88984f6e4454.herokuapp.com/users");
});
When("dar a opção de criar um novo usuario", function () {
  cy.get(paginaInicial.buttonNovo).should("be.visible");
  cy.get(paginaInicial.buttonNovo)
    .get("p")
    .invoke("text")
    .should("equal", "Cadastre um novo usuário");
});
When("deve ser possivel trocar de paginas", function () {
  cy.get(paginaInicial.paginaVoltar).should("be.disabled")
  cy.get(paginaInicial.paginaProximo).should("be.enabled")
  cy.get(paginaInicial.paginasTotalAtual).invoke("text").should("equal","1 de 3")
  paginaInicial.clickProximaPagina()
  cy.get(paginaInicial.paginaVoltar).should("be.enabled")
  cy.get(paginaInicial.paginaProximo).should("be.enabled")
  cy.get(paginaInicial.paginasTotalAtual).invoke("text").should("equal","2 de 3")
  paginaInicial.clickProximaPagina()
  cy.get(paginaInicial.paginaVoltar).should("be.enabled")
  cy.get(paginaInicial.paginaProximo).should("be.disabled")
  cy.get(paginaInicial.paginasTotalAtual).invoke("text").should("equal","3 de 3")
});

Then(
  "o sistema deve exibir uma mensagem que não existem usuarios cadastrados",
  function () {
    cy.get(".sc-koXPp.csBRDe").should("be.visible");
    cy.get(".sc-koXPp.csBRDe")
      .get("h3")
      .invoke("text")
      .should("equal", "Ops! Não existe nenhum usuário para ser exibido.");
  }
);
Then("o sistema deve exibir os usuarios cadastrados", function () {
  cy.wait("@listaUsers").then(function (consulta) {
    const users = consulta.response.body;

    users.forEach((usuario) => {
      cy.get(paginaInicial.nomeUser)
        .invoke("text")
        .should("contain", "Nome: " + usuario.name);
      cy.get(paginaInicial.emailUser)
        .invoke("text")
        .should("contain", "E-mail: " + usuario.email.slice(0, 21));
    });
    cy.get(paginaInicial.paginaProximo).should("be.disabled");
    cy.get(paginaInicial.paginaVoltar).should("be.disabled");
    cy.get(paginaInicial.paginasTotalAtual)
      .invoke("text")
      .should("equal", "1 de 1");
  });
});
Then("o sistema deve exibir todos os usuarios cadastrados", function () {
  cy.wait("@listaUsers");
});


