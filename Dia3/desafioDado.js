let pontos = 100;
let rodada = 1;

for (let rodada = 1; rodada <= 20; rodada++) {
    let dado = Math.floor(Math.random() * 6) + 1;

    if(dado % 2 === 1){
        pontos += 10;
    }else{
        pontos -= 5;
    }

    if(rodada % 3 === 0){
        pontos += 15;
    }
    
    if(rodada % 4 === 0){
        pontos -= 20;
    }

    if(pontos < 0){
        pontos -= Math.abs(pontos) * 2; 
        console.log("Rodada atual: " + rodada + ". Pontuação negativa! Perdeu o dobro de pontos! Pontuação Atual: " + pontos);
    }else{
        console.log("Rodada atual: " + rodada + ". Valor do dado: " + dado + ". Pontuação Atual: " + pontos);
    }
}

console.log("Pontuação final após 20 rodadas: " + pontos);
