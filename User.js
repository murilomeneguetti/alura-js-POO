//exportando a classe User
export default class User {
    //ativo como padrão true e role estudante como padrão
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'estudante';
        this.ativo = ativo;
    }

    exibirInfos() {
        return `Nome: ${this.nome}, email: ${this.email}`;
    }

}

//instanciando a classe em um novo objeto
// const novoUser = new User('Juliana', 'j@j.com', '2021-01-01');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());
// console.log(User.prototype.isPrototypeOf(novoUser)) //true
