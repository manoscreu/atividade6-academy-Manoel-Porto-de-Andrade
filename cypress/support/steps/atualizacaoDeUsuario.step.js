import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import atualizacaoPage from "../pages/atualizacao.page.js";
const paginaAtualizacao = new atualizacaoPage();
import { faker, fakerPT_BR } from "@faker-js/faker";
let id;
let nomeFaker = fakerPT_BR.person.firstName();
let emailFaker = faker.internet.email();

Given("o usuario ja esta cadastrado no sistema", function () {
  cy.criaUsuario().then(function (userData) {
    id = userData.userId;
  });
});
When("busco por um identificador invalido", function () {
  cy.visit(
    "https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/e12ad037-ece6-4c7e-8326-26282538c79ç"
  );
});
When("acesso o cadastro do usuario", function () {
  cy.visit("https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/" + id);
});
When("clico na opção de atualizar o cadastro", function () {
  paginaAtualizacao.clicaEditar();
});
When("informo um nome {string}", function (nome) {
  cy.get(paginaAtualizacao.nomeUser).clear();
  paginaAtualizacao.typeNome(nome);
});
When("informo um e-mail ja cadastrado", function () {
  cy.intercept("PATCH", "api/v1/users", {
    statusCode: 422,
    fixture: "/mocks/userExistente.json",
  });
  cy.stub().as("stubAlerta");

  cy.on("window:alert", this.stubAlerta);
  cy.get(paginaAtualizacao.emailUser).clear();
  paginaAtualizacao.typeEmail("email@email.com");
});
When("confirmo a operação", function () {
  paginaAtualizacao.clicaSalvar();
});
When("informo um e-mail {string}", function (email) {
  cy.get(paginaAtualizacao.emailUser).clear();
  paginaAtualizacao.typeEmail(email);
});
When("limpo o campo nome", function () {
  cy.get(paginaAtualizacao.nomeUser).clear();
});
When("o sistema deve apresentar o erro de nome invalido", function () {
  cy.get(paginaAtualizacao.erroCadastro).should("be.visible");
  cy.get(paginaAtualizacao.erroCadastro)
    .invoke("text")
    .should("equal", "O campo nome é obrigatório.");
});
When("informo um nome muito longo", function () {
  cy.get(paginaAtualizacao.nomeUser).clear();
  paginaAtualizacao.typeNome(
    "Lorem ipsum dolor sit amet consectetur adipiscing elit Morbi ante dui ullamcorper vel sem id pharetra"
  );
});
When("limpo o campo email", function () {
  cy.get(paginaAtualizacao.emailUser).clear();
});
When("informo um e-mail invalido {string}", function (email) {
  cy.get(paginaAtualizacao.emailUser).clear();
  paginaAtualizacao.typeEmail(email);
});
When("informo um novo nome", function () {
  cy.get(paginaAtualizacao.nomeUser).clear();
  paginaAtualizacao.typeNome(nomeFaker);
});
When("informo um novo e-mail", function () {
  cy.get(paginaAtualizacao.emailUser).clear();
  paginaAtualizacao.typeEmail(emailFaker);
});

Then("o sistema deve exibir um aviso de usuario não encontrado", function () {
  cy.get(paginaAtualizacao.mensagemErro).should("be.visible");
  cy.get(paginaAtualizacao.mensagemErro)
    .get("h2")
    .invoke("text")
    .should("equal", "Usuário não encontrado");
  cy.get(paginaAtualizacao.mensagemErro)
    .get("p")
    .invoke("text")
    .should("equal", "Não foi possível localizar o usuário.");
  cy.get(paginaAtualizacao.botaoCancelar).should("be.visible");
  cy.get(paginaAtualizacao.botaoCancelar)
    .invoke("text")
    .should("equal", "Cancelar");
});
Then(
  "o sistema deve apresentar o erro informando que este email ja esta cadastrado",
  function () {
    cy.contains("Este e-mail já é utilizado por outro usuário.");
    cy.contains("button", "Cancelar").should("be.visible");
    cy.contains("button", "Cancelar");
  }
);
Then("o sistema deve apresentar o erro de nome muito longo", function () {
  cy.get(paginaAtualizacao.erroCadastro).should("be.visible");
  cy.get(paginaAtualizacao.erroCadastro)
    .invoke("text")
    .should("equal", "Informe no máximo 100 caracteres para o nome");
});
Then("o sistema deve avisar que o campo email é obrigatorio", function () {
  cy.get(paginaAtualizacao.erroCadastro).should("be.visible");
  cy.get(paginaAtualizacao.erroCadastro)
    .invoke("text")
    .should("equal", "O campo e-mail é obrigatório.");
});
Then("o sistema deve avisar que o formato do email é invalido", function () {
  cy.get(paginaAtualizacao.erroCadastro).should("be.visible");
  cy.get(paginaAtualizacao.erroCadastro)
    .invoke("text")
    .should("equal", "Formato de e-mail inválido");
});
Then("o sistema deve avisar que o email é muito longo", function () {
  cy.get(paginaAtualizacao.erroCadastro).should("be.visible");
  cy.get(paginaAtualizacao.erroCadastro)
    .invoke("text")
    .should("equal", "Informe no máximo 60 caracteres para o e-mail");
});
Then("o sistema realizar a atualizar do usuario corretamente", function () {
    cy.get("[class='go3958317564']").should("be.visible")
    cy.get("[class='go3958317564']").invoke("text").should("equal","Informações atualizadas com sucesso!")
});
