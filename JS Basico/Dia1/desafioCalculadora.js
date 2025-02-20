
let precoProduto = 100.0; 
let temDesconto = true;
let icms = Math.floor(Math.random() * (25 - 12 + 1)) + 12;
let produtoComDesconto = "";
let desconto = "";

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