//new: criar instâncias de objetos através de função construtora

function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`;
    }
}

//criando objeto usando o construtor
const novoUser1 = new User('Fabiana', 'f@f.com');
console.log(novoUser1.exibirInfos());

//criando objeto com object.create
function Admin(role) {
    //admin vai receber as propriedades de User. parametro this se refere a User
    User.call(this, 'Juliana', 'j@j.com');
    //se receber o role como parametro, fica com o valor, senão recebe o role estudante
    this.role = role || 'estudante';
}

//passando as propriedades de User para dentro das propriedades de Admin
Admin.prototype = Object.create(User.prototype);
//criando novo usuário Admin, com User como protótipo de Admin
const novoUser2 = new Admin('admin');

console.log(novoUser2.exibirInfos());
console.log(novoUser2.role);
