/*Crie um programa simples que permite ao usuário gerenciar um cadastro de pessoas.
Cada pessoa terá um nome, idade e e-mail armazenados como um objeto dentro de um
array. O usuário poderá adicionar, remover e listar os cadastros.
Regras:
1. O programa deve armazenar os usuários em um array de objetos, onde cada
objeto representa uma pessoa com as propriedades:
o nome
o idade
o email
2. O usuário poderá escolher entre as seguintes opções:
o Adicionar um novo usuário.
o Remover um usuário pelo email.
o Listar todos os usuários cadastrados.
o Sair do programa.
3. O programa deve rodar até que o usuário escolha sair.
4. Não pode haver mais de um usuário com o mesmo e-mail*/

const prompt = require("prompt-sync")();

let usuarios = [];

function validaEmail(email,usuarios) {
    let index = usuarios.findIndex(usuario => usuario.email === email); //Professor explicou que o primeiro usuario => dentro da arrow function serve como callback e o findIndex possui um for mascarado
        if (index !== -1) {
            return "Email já existe";
        }   
}

function adicionarUsuario() {
    let nome = prompt("Digite o nome: ");
    let idade = Number(prompt("Digite a idade: "));
    let email = prompt("Digite o e-mail: ");

    if (validaEmail(email,usuarios)) {
        console.log("Erro: O email já está cadastrado.");
        return;
    }

    usuarios.push({ nome, idade, email });
    console.log("Usuário cadastrado com sucesso!");
}

function removerUsuario() {
    let email = prompt("Digite o e-mail do usuário que deseja remover: ");
    let index = usuarios.findIndex(usuario => usuario.email === email);

    if (index === -1) {
        console.log("Erro: Usuário não encontrado.");
        return;
    }

    usuarios.splice(index, 1);
    console.log("Usuário removido com sucesso!");
}

function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
        return;
    }

    console.log("\nLista de Usuários:");
    usuarios.forEach((usuario) => {
        console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, E-mail: ${usuario.email}`);
    });
}

while (true) {
    console.log("\n1. Adicionar usuário");
    console.log("2. Remover usuário");
    console.log("3. Listar usuários");
    console.log("4. Sair");

    let opcao = prompt("Escolha uma opção: ");

    if(opcao === "1"){
        adicionarUsuario();
    }else if(opcao === "2"){
        removerUsuario();
    }else if(opcao === "3"){
        listarUsuarios();
    }else if(opcao === "4"){
        console.log("Saindo do programa...");
        break;
    }else{
        console.log("Opção inválida. Tente novamente.");
    }
}
