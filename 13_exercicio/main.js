let p = document.querySelector('p');

numero = parseInt(prompt("Digite um número: "));

let ehPrimo = true;

if (numero <= 1) {
    ehPrimo = false;

} else {
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }
}

if (ehPrimo) {
    p.innerHTML = `${numero} é um número primo.`;

} else {
    p.innerHTML = `${numero} não é um número primo.`;
}

