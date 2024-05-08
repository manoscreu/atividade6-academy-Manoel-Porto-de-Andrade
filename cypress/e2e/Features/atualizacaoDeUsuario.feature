#language: pt
Funcionalidade: Atualização de Usuario
Contexto: Atualização de usuario
    Dado o usuario ja esta cadastrado no sistema

Cenario: Caso nenhum usuário seja localizado pelo identificador único, a atualização não deve ser realizada.
    Quando busco por um identificador invalido   d
    Então o sistema deve exibir um aviso de usuario não encontrado

Cenário:Não deve ser possível atualizar um usuário com um email ja em uso
    Quando acesso o cadastro do usuario
    E clico na opção de atualizar o cadastro
    E informo um nome "Manoel"
    E informo um e-mail ja cadastrado
    E confirmo a operação
    Então o sistema deve apresentar o erro informando que este email ja esta cadastrado

Cenário: Não deve ser possível atualizar um usuário sem preencher o campo nome
    Quando acesso o cadastro do usuario
    E clico na opção de atualizar o cadastro
    E limpo o campo nome
    E informo um e-mail "testes@qa.com"
    E confirmo a operação
    Então o sistema deve apresentar o erro de nome invalido

 Cenário: Não deve ser possível atualizar um usuário com nome maior que 100 caracteres
    Quando acesso o cadastro do usuario
    E clico na opção de atualizar o cadastro
    E informo um nome muito longo
    E informo um e-mail "testes@qa.com"
    E confirmo a operação
    Então o sistema deve apresentar o erro de nome muito longo

 Cenário: Não deve ser possível atualizar um usuário sem preencher o campo email
    Quando acesso o cadastro do usuario
    E clico na opção de atualizar o cadastro
    E informo um nome "Manoel"
    E limpo o campo email
    E confirmo a operação
    Então o sistema deve avisar que o campo email é obrigatorio

 Cenário: Não deve ser possível atualizar um usuário com um email invalido
    Quando acesso o cadastro do usuario
    E clico na opção de atualizar o cadastro
    E informo um nome "Manoel"
    E informo um e-mail invalido "testes@qa"
    E confirmo a operação
    Então o sistema deve avisar que o formato do email é invalido

 Cenário: Não deve ser possível atualizar um usuário com um email maior que 60 caracteres
    Quando acesso o cadastro do usuario
    E clico na opção de atualizar o cadastro
    E informo um nome "Manoel"
    E informo um e-mail "LoremipsumdolorsitametconsecteturadipiscingelitMorbiantedui@qa.com"
    E confirmo a operação
    Então o sistema deve avisar que o email é muito longo

Cenário: Atualização de um usuario com sucesso
    Quando acesso o cadastro do usuario
    E clico na opção de atualizar o cadastro
    E informo um novo nome
    E informo um novo e-mail
    E confirmo a operação
    Então o sistema realizar a atualizar do usuario corretamente