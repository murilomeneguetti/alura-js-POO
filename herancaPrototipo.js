//Objeto admin vai herdar o método exibirInfos do objeto user

const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2021/01/01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: 'Mariana',
    email: 'm@m.com',
    role: 'admin',
    criarCurso() {
        console.log('curso criado!');
    }
}

//herança por protótipo
// parametro 1 - objeto que vai herdar as propriedade
// parametro 2 - objeto que vai dar as propriedade
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();
