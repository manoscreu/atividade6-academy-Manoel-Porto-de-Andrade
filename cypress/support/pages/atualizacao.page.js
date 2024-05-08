export default class atualizacaoPage {
    mensagemErro = ".sc-dCFHLb.lmTxRO"
    botaoCancelar = ".sc-lcIPJg.ifkIA-D"
    botoesEdicao =   ".sc-dAlyuH.jdAtLn"
    nomeUser = "#userName"
    emailUser = "#userEmail"
    erroCadastro = ".sc-cPiKLX.feFrSQ"

    clicaEditar(){
        cy.contains(this.botoesEdicao,"Editar").click()
    }
    clicaCancelar(){
        cy.contains(this.botoesEdicao,"Cancelar").click()
    }
    clicaSalvar(){
        cy.contains(this.botoesEdicao,"Salvar").click()
    }

    typeNome(nome){
        cy.get(this.nomeUser).type(nome)
    }
    typeEmail(email){
        cy.get(this.emailUser).type(email)
    }
  }

 