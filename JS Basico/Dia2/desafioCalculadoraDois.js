
let precoProduto = 100.0; 
let temDesconto = true;
let icms = Math.floor(Math.random() * (25 - 12 + 1)) + 12;
let produtoComDesconto = "";
let desconto = "";
let estado = "SP"
let frete = 0;
let cupom = "PROMO15"

if (cupom == "PROMO15") {
    desconto = 15 
}
else if (Math.random () >= 0.5) {
    desconto = 10
}
else {
    desconto = 0
}

switch (estado) {
    case "SP":
        frete = 10;
        break;
    case "RJ":
        frete = 20;
        break
    default:
        frete = 30;
        break;
}

if(temDesconto === true){
    produtoComDesconto = precoProduto * 0.9
    desconto = "Sim";
}else{
    desconto = "Não";
}

definirPrecoComImposto = (precoProduto, icms) => {
    return precoProduto + (precoProduto * icms / 100);
};


let precoFinal = definirPrecoComImposto(produtoComDesconto, icms);

console.log("Preço Original: R$", precoProduto.toFixed(2));
console.log("Teve Desconto?:", desconto);
console.log("Preço com Desconto: R$", produtoComDesconto.toFixed(2));
console.log("ICMS Aplicado:", icms + "%");
console.log("Preço Final com Imposto: R$", precoFinal.toFixed(2));