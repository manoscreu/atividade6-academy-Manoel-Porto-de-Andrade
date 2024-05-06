#language: pt
Funcionalidade: Pesquisa de Usuarios
Cenário: Deve ser possivel pesquisar um usuario pelo nome
    Dado acesso a pagina de listagem de usuario 
    E busco com um usuario existente pelo nome
    Entao o sistema deve exibir este usuario

Cenário: Deve ser possivel pesquisar um usiario pelo E-mail
    Dado acesso a pagina de listagem de usuario 
    E busco com um usuario existente pelo email
    Entao o sistema deve exibir este usuario

Cenário: Cado hajam dois usuarios com o mesmo nome ambos devem ser exibidos
    Dado acesso a pagina de listagem de usuario 
    E busco por um nome mais de um usiario usa
    Entao o sistema deve exibir estes usuarios
