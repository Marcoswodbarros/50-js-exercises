let p = document.querySelector('p');
let numeroSorteado = Math.floor(Math.random() * 3);
let numeroUsuario = parseInt(prompt('Digite um número de 0 a 100:'));

while (true) {

    if (numeroSorteado != numeroUsuario) {
        alert('Você errou.');

        if (numeroUsuario < numeroSorteado) {
            numeroUsuario = parseInt(prompt(`Tente novamente.\nDigite um número maior que ${numeroUsuario}:`));

        } else {
            numeroUsuario = parseInt(prompt(`Tente novamente.\nDigite um número menor que ${numeroUsuario}:`));
        }

    } else {
        p.innerHTML = `Parabéns, você acertou! O número sorteado foi: ${numeroSorteado}.`
        break;
    }
} 
