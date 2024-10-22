const p = document.querySelector('p');

const decimal = parseInt(prompt("Digite um número decimal:"));
let numero = decimal;
let binario = "";

while (numero > 0) {
    const resto = numero % 2;
    binario = resto + binario;
    numero = Math.floor(numero / 2);
}

p.innerHTML = `A representação binária do número ${decimal} é: ${binario}.`;