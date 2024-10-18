let p = document.querySelector('p');

const numeroUsuario = prompt('Digite um número:');

if (numeroUsuario > 0 ) {
    p.innerHTML = `O número (${numeroUsuario}) digitado é positivo.`

} else if (numeroUsuario == 0) {
    p.innerHTML = `O número (${numeroUsuario}) digitado é igual a zero.`

} else {
    p.innerHTML = ` O número (${numeroUsuario}) digitado é negativo.`
}