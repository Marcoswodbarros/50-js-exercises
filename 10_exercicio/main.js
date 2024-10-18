let p = document.querySelector('p');

const anoUsuario = prompt('Digite um ano:');

if ((anoUsuario % 4 == 0) && (anoUsuario % 100 != 0) || (anoUsuario % 400 == 0)) {
    p.innerHTML = `O ano que você digitou (${anoUsuario}) é bissexto.`;

} else {
    p.innerHTML = `O ano que você digitou (${anoUsuario}) não é bissexto.`;
}