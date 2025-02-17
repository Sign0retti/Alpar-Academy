/*
Vocês vão criar um sistema de análise de desempenho de uma equipe. 
 
A quantidade de membros da equipe fica de acordo com o gosto de vocês, 
desde que seja um mínimo de 3 pessoas. 
 
Cada pessoa receberá uma pontuação com base na quantidade de tarefas que forem 
completadas e, para considerar a nota final, deverão ser levados em conta os 
seguintes critérios:
 
1) Cada tarefa recebe uma pontuação de 0 a 10
2) o número de tarefas letia entre 5 e 10, por pessoa da equipe.
 
A pontuação final de cada membro é feita de acordo com a média ponderada. Ou seja, 
tarefas ímpares recebem peso 2, enquanto tarefas pares recebem peso 1. 
 
Caso a média ponderada de um membro seja maior que 8, ele recebe um bônus de 2 pontos. 
 
O sistema precisa retornar o nome e a média de cada pessoa do time, quem teve o 
melhor desempenho, e quem teve o pior desempenho.
*/

class MembroEquipe {
    constructor(nome, tarefas) {
        this.nome = nome;
        this.tarefas = tarefas;
        this.pontuacao = 0;
    }

    calcularPontuacao() {
        let soma = 0;
        let pesoTotal = 0;

        for (let i = 0; i < this.tarefas.length; i++) {
            let peso = (i + 1) % 2 === 0 ? 1 : 2; // Par = peso 1, Ímpar = peso 2
            soma += this.tarefas[i] * peso;
            pesoTotal += peso;
        }

        this.pontuacao = soma / pesoTotal;
        if (this.pontuacao > 8) {
            this.pontuacao += 2;
        }
    }
}

class GerenciadorEquipe {
    constructor() {
        this.membros = [];
    }

    adicionarMembro(nome, tarefas) {
        if (tarefas.length < 5 || tarefas.length > 10) {
            console.log('Número inválido de tarefas para ' + nome + '. Deve ter entre 5 e 10 tarefas.');
            return;
        }

        for (let i = 0; i < tarefas.length; i++) {
            if (tarefas[i] < 0 || tarefas[i] > 10) {
                console.log('Notas inválidas para ' + nome + '. Devem estar entre 0 e 10.');
                return;
            }
        }

        let membro = new MembroEquipe(nome, tarefas);
        membro.calcularPontuacao();
        this.membros.push(membro);
    }

    analisarDesempenho() {
        if (this.membros.length < 3) {
            console.log('A equipe deve ter no mínimo 3 membros.');
            return;
        }

        this.membros.sort(function(a, b) {
            return b.pontuacao - a.pontuacao;
        });

        console.log('\n=== Pontuações Individuais ===');
        for (let i = 0; i < this.membros.length; i++) {
            console.log(this.membros[i].nome + ': ' + this.membros[i].pontuacao.toFixed(2) + ' pontos');
        }

        console.log('\n=== Resumo do Desempenho ===');
        console.log('Melhor desempenho: ' + this.membros[0].nome + ' (' + this.membros[0].pontuacao.toFixed(2) + ' pontos)');
        console.log('Pior desempenho: ' + this.membros[this.membros.length - 1].nome + ' (' + this.membros[this.membros.length - 1].pontuacao.toFixed(2) + ' pontos)');

        let somaTotal = 0;
        for (let i = 0; i < this.membros.length; i++) {
            somaTotal += this.membros[i].pontuacao;
        }
        let mediaDaEquipe = somaTotal / this.membros.length;
        console.log('\nMédia da equipe: ' + mediaDaEquipe.toFixed(2) + ' pontos');
        
        let membrosAcimaMedia = this.membros.filter(function(membro) {
            return membro.pontuacao > mediaDaEquipe;
        });
        console.log('Membros acima da média: ' + membrosAcimaMedia.map(function(m) {
            return m.nome;
        }).join(', '));
    }
}

let equipe = new GerenciadorEquipe();

equipe.adicionarMembro('Gabriel', [7, 6, 8, 5, 9]);
equipe.adicionarMembro('Pedro', [9, 8, 10, 7, 8, 9]);
equipe.adicionarMembro('Enzo', [5, 6, 7, 6, 5]);
equipe.adicionarMembro('Nicolas', [8, 9, 7, 8, 10]);

// Analisa e exibe resultados
equipe.analisarDesempenho();
