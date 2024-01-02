const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2021/01/01',
    role: 'admin',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

user.exibirInfos();

//quando passamos a função a uma variável, a função exibirInfos perdeu o contexto (conexão com o objeto user pela palavra this)
const exibir = user.exibirInfos;
exibir();

//criando uma função com this fora de um objeto, a função também fica sem contexto
const exibir2 = function() {
    console.log(this.nome);
}
exibir2();

//usando a função bind para dar contexto a função exibir2 (ligar ao objeto user)
const exibirNome = exibir2.bind(user);
exibirNome();
