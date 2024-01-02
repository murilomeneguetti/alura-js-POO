//usando init como uma função construtora
const user = {
    init: function (nome, email) {
        this.nome = nome,
        this.email = email
    },

    exibirInfos: function() {
        return this.nome;
    }
}

const novoUser = Object.create(user);
novoUser.init('Juliana', 'j@j.com');
console.log(novoUser.exibirInfos());
//testando se user está sendo usado como protótipo de novoUser
console.log(user.isPrototypeOf(novoUser))
