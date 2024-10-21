let p = document.querySelector('p');

const numeroUsuario = prompt('Digite um número:');
let numeroSorteado = Math.floor(Math.random() * 10) + 1;

if (numeroUsuario == numeroSorteado) {
    p.innerHTML = `Parabéns! Você acertou! O número sorteado foi: ${numeroSorteado}.`

} else {
    p.innerHTML = `Você errou...o seu palpite foi: ${numeroUsuario}, mas o número sorteado foi: ${numeroSorteado}.`
}