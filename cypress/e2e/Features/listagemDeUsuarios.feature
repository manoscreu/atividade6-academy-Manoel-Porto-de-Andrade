#language: pt
Funcionalidade: Lista de Usuarios
Cenário: Caso não existam usuários cadastrados, deve exibir a opção de criar um novo
    Dado que não existam usuarios cadastrados no sistema
    Quando acesso a pagina de listagem de usuario
    Entao o sistema deve exibir uma mensagem que não existem usuarios cadastrados
    E dar a opção de criar um novo usuario

Cenário: Consulta da lista de usuarios
    Dado que existam usuarios cadastrados
    Quando acesso a pagina de listagem de usuario
    Entao o sistema deve exibir os usuarios cadastrados

Cenário: Deve ser possivel mudar de pagina caso hajam mais de 6 usuarios cadastrados
    Dado que existam mais de 6 usuarios cadastrados
    Quando acesso a pagina de listagem de usuario 
    Entao o sistema deve exibir todos os usuarios cadastrados
    E deve ser possivel trocar de paginas

