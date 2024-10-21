const p = document.querySelector('p');

let n1 = parseFloat(prompt('Digite a sua primeira nota:'));
let p1 = parseFloat(prompt('Digite o peso da sua primeira nota:'));

let n2 = parseFloat(prompt('Digite a sua segunda nota:'));
let p2 = parseFloat(prompt('Digite o peso da sua segunda nota:'));

let n3 = parseFloat(prompt('Digite a sua terceira nota:'));
let p3 = parseFloat(prompt('Digite o peso da sua terceira nota:'));

const media = ((n1 * p1) + (n2 * p2) + (n3 * p3)) / (p1 + p2 + p3);

p.innerHTML = `A média ponderada do aluno é: ${media.toFixed(2)}.`