import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InicialPage from "../pages/inicial.page.js";
import { el, fakerPT_BR } from "@faker-js/faker";
const paginaInicial = new InicialPage();
let nome;
let email;
let nomes;
let email1;
let email2;

before(function () {
  cy.criaUsuario().then(function (userData) {
    nome = userData.userName;
    email = userData.userEmail;
  });
});

Given("que acesso a pagina de listagem de usuario", function () {
  cy.visit("https://rarocrud-frontend-88984f6e4454.herokuapp.com/users");
});

When("busco com um usuario existente pelo nome", function () {
  paginaInicial.Pesquisa(nome);
});
When("busco com um usuario existente pelo email", function () {
  paginaInicial.Pesquisa(email);
});
When("existem mais de um usuario cadastrados com o mesmo nome", function () {
  cy.criaDoisUsuarios().then(function (userData) {
    nomes = userData.nomeUser;
    email1 = userData.email1;
    email2 = userData.email2;
  });
});
When("busco pelo nome desses usuarios", function () {
  paginaInicial.Pesquisa(nomes);
});
When("busco com um por um nome de usuario inexistente", function () {
  paginaInicial.Pesquisa("Este nome não existe" + fakerPT_BR.person.fullName());
});
When("busco com um por um email de usuario inexistente", function () {
  paginaInicial.Pesquisa("Este email não existe" + fakerPT_BR.internet.email());
});

Then("o sistema deve exibir este usuario", function () {
  let tamanhoEmail = email.length;
  cy.get(paginaInicial.nomeUser)
    .invoke("text")
    .should("equal", "Nome: " + nome);
  if (tamanhoEmail > 21) {
    cy.get(paginaInicial.emailUser)
      .invoke("text")
      .should("equal", "E-mail: " + email.slice(0, 21) + "...");
  } else {
    cy.get(paginaInicial.emailUser)
      .invoke("text")
      .should("equal", "E-mail: " + email);
  }
});

Then("o sistema deve exibir estes usuarios", function () {
  cy.log(nomes);
  cy.get(paginaInicial.nomeUser)
    .invoke("text")
    .should("equal", "Nome: " + nomes + "Nome: " + nomes);
  cy.get(paginaInicial.emailUser)
    .invoke("text")
    .should("equal", "E-mail: " + email1 + "E-mail: " + email2);
});

Then(
  "o sistema deve exibir um erro de usuario inexistente e dar a opção de cadastro",
  function () {
    cy.get(".sc-koXPp.csBRDe").should("be.visible");
    cy.get(".sc-koXPp.csBRDe")
      .get("h3")
      .invoke("text")
      .should("equal", "Ops! Não existe nenhum usuário para ser exibido.");
    cy.get(paginaInicial.buttonNovo).should("be.visible");
    cy.get(paginaInicial.buttonNovo)
      .get("p")
      .invoke("text")
      .should("equal", "Cadastre um novo usuário");
  }
);
