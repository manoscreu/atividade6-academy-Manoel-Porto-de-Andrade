export default class InicialPage {
  buttonNovo = '[href="/users/novo"]';
  campoPesquisa = ".sc-gsFSXq";
  detalhesUsuario = ".sc-hzhJZQ";
  nomeUser = '[data-test="userDataName"]';
  emailUser = '[data-test="userDataEmail"]';
  paginaVoltar = "#paginacaoVoltar"
  paginaProximo = "#paginacaoProximo"
  paginasTotalAtual = "#paginacaoAtual"


  Pesquisa(nome) {
    cy.get(this.campoPesquisa).type(nome);
  }
  clickNovo() {
    cy.get(this.buttonNovo).click();
  }

  pegaPrimeiroUser() {
    cy.get(this.detalhesUsuario).first().click();
  }
  pegaUltimoUser() {
    cy.get(this.detalhesUsuario).last().click();
  }
  clickProximaPagina(){
    cy.get(this.paginaProximo).click();
  }
  clickVoltarPagina(){
    cy.get(this.paginaVoltar).click();
  }
}
