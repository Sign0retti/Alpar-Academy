let a = 7;
let b = 12;
let c = 2;

function calculaDelta(a, b, c) {
    let delta = b ** 2 - 4 * a * c;
    return delta;
}

let delta = calculaDelta(a, b, c);

let x1 = (-b + Math.sqrt(delta)) / (2 * a);
let x2 = (-b - Math.sqrt(delta)) / (2 * a);

console.log("X1:", x1);
console.log("X2:", x2);