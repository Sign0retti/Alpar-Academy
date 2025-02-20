const prompt = require("prompt-sync")();
let numeroCorreto =  Math.round(Math.random() * 100);
let numeroDigitado = Number(prompt("Digite um número ou digite '500' para sair do jogo: ").trim());
let tentativas = 0;

//Se certifica de que a entrada é um número
while(numeroDigitado != numeroCorreto){
    if(isNaN(numeroDigitado)){
        console.log("Erro! Digite um número válido.")
        numeroDigitado = Number(prompt("Tente novamente: "))
    }
    else if(numeroDigitado < numeroCorreto && numeroDigitado != 500){
        console.log("-------------O numero final é maior que " + numeroDigitado + ".-------------")
        numeroDigitado = Number(prompt("Tente novamente: "))
        tentativas++
    }else if(numeroDigitado > numeroCorreto && numeroDigitado != 500){
        console.log("-------------O numero final é menor que " + numeroDigitado + ".-------------")
        numeroDigitado = Number(prompt("Tente novamente: "))
        tentativas++
    }else if(numeroDigitado === 500)
        /*escapatória caso a pessoa não queira mais jogar */{
        console.log("Saindo do jogo...")
        break;
    }
    
}

console.log("Voce acertou! o número correto é " + numeroCorreto)
console.log("Voce precisou de " + tentativas + " tentativas para acertar.")