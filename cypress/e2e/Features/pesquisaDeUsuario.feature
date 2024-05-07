#language: pt


Funcionalidade: Pesquisa de Usuarios

Cenário: Deve ser possivel pesquisar um usuario pelo nome
    Dado que acesso a pagina de listagem de usuario
    Quando busco com um usuario existente pelo nome
    Entao o sistema deve exibir este usuario

Cenário: Deve ser possivel pesquisar um usiario pelo E-mail
    Dado que acesso a pagina de listagem de usuario
    Quando busco com um usuario existente pelo email
    Entao o sistema deve exibir este usuario

Cenário: Caso hajam dois usuarios com o mesmo nome ambos devem ser exibidos
    Dado que acesso a pagina de listagem de usuario
    E existem mais de um usuario cadastrados com o mesmo nome
    Quando busco pelo nome desses usuarios
    Entao o sistema deve exibir estes usuarios

Cenario: Caso não haja um usuario cadastrado com o nome pesquisado o sistema deve exibir um erro
    Dado que acesso a pagina de listagem de usuario
    Quando busco com um por um nome de usuario inexistente
    Entao o sistema deve exibir um erro de usuario inexistente e dar a opção de cadastro

Cenario: Caso não haja um usuario cadastrado com o email pesquisado o sistema deve exibir um erro
    Dado que acesso a pagina de listagem de usuario
    Quando busco com um por um email de usuario inexistente
    Entao o sistema deve exibir um erro de usuario inexistente e dar a opção de cadastro


