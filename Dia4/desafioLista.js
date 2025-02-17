const prompt = require("prompt-sync")();
let nome = prompt("Digite seu nome: ");
let listaDeCompras = [];
let opcaoEscolhida = "";

console.log(`Olá ${nome}! Bem-vindo à sua lista de compras.`);

function adicionarItem(item) {
    listaDeCompras.push(item);
    console.log("Item adicionado com sucesso.");
}

function removerItem(item) {
    let index = listaDeCompras.indexOf(item);
    if (index !== -1) {
        listaDeCompras.splice(index, 1);
        console.log("Item removido com sucesso.");
    } else {
        console.log("Item não encontrado na lista.");
    }
}

function exibirLista() {
    if (listaDeCompras.length === 0) {
        console.log("A lista está vazia.");
    } else {
        console.log("Itens na lista:");
        listaDeCompras.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}

while (opcaoEscolhida !== "4") {
    console.log("\nEscolha uma opção:");
    console.log("1 - Adicionar item à lista");
    console.log("2 - Remover um item da lista");
    console.log("3 - Exibir os itens da lista");
    console.log("4 - Sair do programa");

    opcaoEscolhida = prompt("Digite o número da opção desejada: ");

    switch (opcaoEscolhida) {
        case "1":
            let itemAdicionar = prompt("Digite o item que deseja adicionar: ");
            adicionarItem(itemAdicionar);
            break;
        case "2":
            let itemRemover = prompt("Digite o item que deseja remover: ");
            removerItem(itemRemover);
            break;
        case "3":
            exibirLista();
            break;
        case "4":
            console.log("Saindo do programa. Até mais!");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}
