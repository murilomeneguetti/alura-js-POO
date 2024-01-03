import User from "./User.js";

export default class Docente extends User {
    constructor (nome, email, nascimento, role = 'docente', ativo = 'true') {
        super(nome, email, nascimento, role, ativo);
    }

    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} aprovado no curso ${curso}`;
    }
}

// const novoDocente = new Docente('Murilo', 'm@m.com', '1997-05-16');
// console.log(novoDocente);
// console.log(novoDocente.exibirInfos());
// console.log(novoDocente.aprovaEstudante('Vinicius','JS'));
