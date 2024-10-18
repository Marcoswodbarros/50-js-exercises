let p = document.querySelector('p');

const numeroUsuario = prompt('Digite um número:');
let numerosListados = [];


for (let i = 1; i < numeroUsuario; i++) {
    numerosListados.push(i);
}

p.innerHTML = `${numerosListados.join(', ')}, ${numeroUsuario}.`