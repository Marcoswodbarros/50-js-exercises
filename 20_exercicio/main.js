const p = document.querySelector('p');

// Palavra digitada pelo usuario
let palavraUsuario = prompt('Digite uma palavra:').toLocaleLowerCase().replace(/ /g, '');
let palavraInvertida = palavraUsuario.split('').reverse().join('');

// Verificação de palíndromo
if (palavraUsuario === palavraInvertida) {
    p.innerHTML = `A palavra "${palavraUsuario}" é um palíndromo.`
    
} else {
    p.innerHTML = `A palavra "${palavraUsuario}" não é um palíndromo.`
}
