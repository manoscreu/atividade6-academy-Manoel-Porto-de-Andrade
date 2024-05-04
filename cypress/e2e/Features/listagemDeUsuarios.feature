#language: pt
Funcionalidade: Lista de Usuarios

Cenário: Caso não existam usuários cadastrados, deve exibir a opção de criar um novo
    Dado que não existam usuarios cadastrados no sistema
    Quando acesso a pagina de listagem de usuario
    Entao o sistema deve exibir uma mensagem que não existem usuarios cadastrados
    E dar a opção de criar um novo usuario
