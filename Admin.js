//importando a classe User
import User from "./User.js";

//herdando propriedades da classe User
//User é superclasse de Admin
//Admin é uma subclasse de User
export default class Admin extends User {
    //usando a função super, que é de superclasse, trazendo todas as propriedades que queremos aproveitas de User para Admin
    constructor(nome, email, nascimento, role = 'admin', ativo = 'true') {
        super(nome, email, nascimento, role, ativo);
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
    }
}

//criando um novo objeto Admin
// const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01');
// console.log(novoAdmin);
// //não precisamos repetir o método exibirInfos na declaração da classe Admin porque ele já veio da superclasse User
// console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.criarCurso('JS',20));
