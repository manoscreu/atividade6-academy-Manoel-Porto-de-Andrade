import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CadastroPage from "../pages/cadastro.page.js";
import InicialPage from "../pages/inicial.page.js"
import { faker } from "@faker-js/faker";
const paginaInicial = new InicialPage();
const paginaCadastro = new CadastroPage();

Given("que acesso a funcionalidade de cadastro", function () {
  cy.visit("https://rarocrud-frontend-88984f6e4454.herokuapp.com/users");
  paginaInicial.clickNovo();
});

When("informo um novo nome", function () {
  var nome = faker.person.firstName();
  cy.wrap(nome).as("nomeFaker");
  paginaCadastro.typeNome(nome);
});

When("informo um novo e-mail", function () {
  var email = faker.internet.email();
  cy.wrap(email).as("emailFaker");
  paginaCadastro.typeEmail(email);
});

When("informo um nome {string}", function (nome) {
  paginaCadastro.typeNome(nome);
});

When("informo um e-mail {string}", function (email) {
  paginaCadastro.typeEmail(email);
});

When("informo um e-mail ja cadastrado", function () {
  cy.intercept("POST", "api/v1/users", {
    statusCode: 422,
    fixture: "/mocks/userExistente.json",
  }).as("postUsuario");
  cy.stub().as("stubAlerta");

  cy.on("window:alert", this.stubAlerta);
  paginaCadastro.typeEmail("email@email.com");
});

When("confirmo a operação", function () {
  paginaCadastro.clickSalvar();
});

When("informo um nome muito longo", function () {
  paginaCadastro.typeNome(
    "Lorem ipsum dolor sit amet consectetur adipiscing elit Morbi ante dui ullamcorper vel sem id pharetra"
  );
});

Then("o sistema deve apresentar o erro de nome invalido", function () {
  cy.get(paginaCadastro.erroCadastro).should("be.visible");
  cy.get(paginaCadastro.erroCadastro)
    .invoke("text")
    .should("equal", "O campo nome é obrigatório.");
});

Then("o sistema deve apresentar o erro de nome muito longo", function () {
  cy.get(paginaCadastro.erroCadastro).should("be.visible");
  cy.get(paginaCadastro.erroCadastro)
    .invoke("text")
    .should("equal", "Informe no máximo 100 caracteres para o nome");
});

Then(
  "o sistema deve apresentar o erro informando que este email ja esta cadastrado",
  function () {
    cy.wait("@postUsuario");
    cy.contains("Este e-mail já é utilizado por outro usuário.");
    cy.contains("button", "Cancelar").should("be.visible");
    cy.contains("button", "Cancelar");
  }
);

Then("o sistema deve avisar que o campo email é obrigatorio", function () {
  cy.get(paginaCadastro.erroCadastro).should("be.visible");
  cy.get(paginaCadastro.erroCadastro)
    .invoke("text")
    .should("equal", "O campo e-mail é obrigatório.");
});

Then("o sistema deve avisar que o formato do email é invalido", function () {
  cy.get(paginaCadastro.erroCadastro).should("be.visible");
  cy.get(paginaCadastro.erroCadastro)
    .invoke("text")
    .should("equal", "Formato de e-mail inválido");
});

Then("o sistema deve avisar que o email é muito longo", function () {
  cy.get(paginaCadastro.erroCadastro).should("be.visible");
  cy.get(paginaCadastro.erroCadastro)
    .invoke("text")
    .should("equal", "Informe no máximo 60 caracteres para o e-mail");
});

Then("o sistema realizar o cadastro do usuario corretamente", function () {
  cy.get(paginaCadastro.inputEmail).should("be.empty");
  cy.get(paginaCadastro.inputNome).should("be.empty");
  paginaCadastro.clickVoltar();
  paginaInicial.Pesquisa(this.emailFaker);
  cy.get('[data-test="userDataName"]')
    .invoke("text")
    .should("contain", "Nome: " + this.nomeFaker);
});
