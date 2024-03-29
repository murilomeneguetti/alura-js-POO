import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Mariana', 'm@m.com', '2021-01-01');
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01');
console.log(novoAdmin.exibirInfos());

//usando o getter para consultar o nome
console.log(novoAdmin.nome);
//usando o setter para alterar o nome
novoAdmin.nome = 'André';
console.log(novoAdmin.nome);
console.log(novoAdmin.exibirInfos());

const novoDocente = new Docente('Guilherme', 'g@g.com', '2021-01-01');
console.log(novoDocente.exibirInfos())
