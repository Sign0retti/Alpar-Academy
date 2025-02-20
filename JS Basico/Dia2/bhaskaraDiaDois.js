let a = 0;
let b = -12;
let c = 2;

function calculaDelta(a, b, c) {
    let delta = b ** 2 - 4 * a * c;
    return delta;
}

let delta = calculaDelta(a, b, c);

let x1 = (-b + Math.sqrt(delta)) / (2 * a);
let x2 = (-b - Math.sqrt(delta)) / (2 * a);


if(a == 0){
    console.log ("A letiavel A é igual a 0.")
}
else if(delta == 0){
    console.log("Existe apenas uma raiz real, o valor dela é: " + x1)
}
else if(delta > 0){
    console.log("Existem duas raízes reais, a raiz positiva é: " + x1 + ", e a raiz negativa: " + x2)
}
else{
    console.log("A equação não possui raizes reais.")
}