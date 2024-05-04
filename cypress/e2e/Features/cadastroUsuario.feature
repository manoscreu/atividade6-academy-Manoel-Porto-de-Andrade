#language: pt
Funcionalidade: Cadastro de Usuario

Cenário:Não deve ser possível criar um usuário com um email ja em uso
  Dado que acesso a funcionalidade de cadastro
  Quando informo um nome "Manoel"
  E informo um e-mail ja cadastrado
  E confirmo a operação
  Então o sistema deve apresentar o erro informando que este email ja esta cadastrado

Cenário: Não deve ser possível cadastrar um usuário sem preencher o campo nome
  Dado que acesso a funcionalidade de cadastro
  Quando informo um e-mail "testes@qa.com"
  E confirmo a operação
  Então o sistema deve apresentar o erro de nome invalido

Cenário: Não deve ser possível criar um usuário com nome maior que 100 caracteres
  Dado que acesso a funcionalidade de cadastro
  Quando informo um nome muito longo
  E informo um e-mail "testes@qa.com"
  E confirmo a operação
  Então o sistema deve apresentar o erro de nome muito longo

Cenário: Não deve ser possível criar um usuário sem preencher o campo email
  Dado que acesso a funcionalidade de cadastro
  Quando informo um nome "Manoel"
  E confirmo a operação
  Então o sistema deve avisar que o campo email é obrigatorio

Cenário: Não deve ser possível criar um usuário com um email invalido
  Dado que acesso a funcionalidade de cadastro
  Quando informo um nome "Manoel"
  E informo um e-mail "testes@qa"
  E confirmo a operação
  Então o sistema deve avisar que o formato do email é invalido

Cenário: Não deve ser possível criar um usuário com um email maior que 60 caracteres
  Dado que acesso a funcionalidade de cadastro
  Quando informo um nome "Manoel"
  E informo um e-mail "LoremipsumdolorsitametconsecteturadipiscingelitMorbiantedui@qa.com"
  E confirmo a operação
  Então o sistema deve avisar que o email é muito longo

Cenário: Cadastro de um usuario com sucesso
  Dado que acesso a funcionalidade de cadastro
  Quando informo um novo nome 
  E informo um novo e-mail 
  E confirmo a operação
  Então o sistema realizar o cadastro do usuario corretamente