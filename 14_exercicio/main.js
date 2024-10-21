let p = document.querySelector('p');

const quantidadeUsuario = prompt('Digite a quantidade de números para a média:');
let contador = 0;
let numeros = 0;

for (let i = 0; i < quantidadeUsuario; i++) {
    numeros = prompt('Digite um número:');
    contador += parseInt(numeros);
}

let media = contador / quantidadeUsuario;
p.innerHTML = `A média dos ${quantidadeUsuario} números é de ${media.toFixed(2)}.`

