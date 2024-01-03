//exportando a classe User
export default class User {
    #nome;
    #email;
    #nascimento;
    #role;
    #ativo;
    // # torna o atributo privado para encapsulamento
    //ativo como padrão true e role estudante como padrão
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome() {
        //pode ter uma lógica condicional dentro
        return this.#nome;
    }

    get email() {
        return this.#email;
    }

    get nascimento() {
        return this.#nascimento;
    }

    get role() {
        return this.#role;
    }

    get ativo() {
        return this.#ativo;
    }

    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error('formato não válido');
        }
        this.#nome = novoNome;
    }

    exibirInfos() {
        return `Nome: ${this.nome}, email: ${this.email}, nascimento: ${this.nascimento}, role: ${this.role}, ativo: ${this.#ativo}`;
    }
}

//instanciando a classe em um novo objeto
// const novoUser = new User('Juliana', 'j@j.com', '2021-01-01');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());
// console.log(User.prototype.isPrototypeOf(novoUser)) //true
