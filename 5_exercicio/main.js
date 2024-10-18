let p = document.querySelector('p');

const numeroUsuario = prompt('Digite um número:');

if (numeroUsuario % 2 == 0) {
    p.innerHTML = `O número digitado (${numeroUsuario}) é par.`

} else {
    p.innerHTML = `O número digitado (${numeroUsuario}) é ímpar.`
}