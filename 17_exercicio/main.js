const p = document.querySelector('p');

let n1 = Number(prompt('Digite o primeiro número:'));
let n2 = Number(prompt('Digite o segundo número:'));
let n3 = Number(prompt('Digite o terceiro número:'));
let maiorNumero = Math.max(n1, n2, n3);

p.innerHTML = `O maior número digitado foi: ${maiorNumero}.`