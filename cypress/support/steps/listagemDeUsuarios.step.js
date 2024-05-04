import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CadastroPage from "../pages/cadastro.page.js";
import InicialPage from "../pages/inicial.page.js"
const paginaInicial = new InicialPage();

Given("que não existam usuarios cadastrados no sistema", function () {
  cy.intercept("GET", "api/v1/users", { statusCode: 200, body: [] });
});
When("acesso a pagina de listagem de usuario", function () {
  cy.visit("https://rarocrud-frontend-88984f6e4454.herokuapp.com/users");
});

Then(
  "o sistema deve exibir uma mensagem que não existem usuarios cadastrados",
  function () {
    cy.get(".sc-koXPp.csBRDe").should("be.visible")
    cy.get(".sc-koXPp.csBRDe").get("h3").invoke("text").should("equal","Ops! Não existe nenhum usuário para ser exibido.")
  }
);
And("dar a opção de criar um novo usuario", function () {
    cy.get('[href="/users/novo"]').should("be.visible")
    cy.get('[href="/users/novo"]').invoke('text').should("equal","NovoCadastre um novo usuário")
});
