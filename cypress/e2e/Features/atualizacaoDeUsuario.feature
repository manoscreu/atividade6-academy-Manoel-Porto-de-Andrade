#language: pt
Funcionalidade: Atualização de Usuario

Cenario: Caso nenhum usuário seja localizado pelo identificador único, a atualização não deve ser realizada.
    Dado que 

Cenário:Não deve ser possível atualizar um usuário com um email ja em uso
    Dado que acessei o cadastrado do usuario que desejo atualizar
    Quando informo um nome "Manoel"
    E informo um e-mail ja cadastrado
    E confirmo a operação
    Então o sistema deve apresentar o erro informando que este email ja esta cadastrado

Cenário: Não deve ser possível atualizar um usuário sem preencher o campo nome
    Dado que acessei o cadastrado do usuario que desejo atualizar
    Quando informo um e-mail "testes@qa.com"
    E confirmo a operação
    Então o sistema deve apresentar o erro de nome invalido

Cenário: Não deve ser possível atualizar um usuário com nome maior que 100 caracteres
    Dado que acessei o cadastrado do usuario que desejo atualizar
    Quando informo um nome muito longo
    E informo um e-mail "testes@qa.com"
    E confirmo a operação
    Então o sistema deve apresentar o erro de nome muito longo

Cenário: Não deve ser possível atualizar um usuário sem preencher o campo email
    Dado que acessei o cadastrado do usuario que desejo atualizar
    Quando informo um nome "Manoel"
    E confirmo a operação
    Então o sistema deve avisar que o campo email é obrigatorio

Cenário: Não deve ser possível atualizar um usuário com um email invalido
    Dado que acessei o cadastrado do usuario que desejo atualizar
    Quando informo um nome "Manoel"
    E informo um e-mail "testes@qa"
    E confirmo a operação
    Então o sistema deve avisar que o formato do email é invalido

Cenário: Não deve ser possível atualizar um usuário com um email maior que 60 caracteres
    Dado que acessei o cadastrado do usuario que desejo atualizar
    Quando informo um nome "Manoel"
    E informo um e-mail "LoremipsumdolorsitametconsecteturadipiscingelitMorbiantedui@qa.com"
    E confirmo a operação
    Então o sistema deve avisar que o email é muito longo