let p = document.querySelector('p');

const idadeUsuario = prompt('Digite a sua idade:');

if (idadeUsuario >= 18) {
    p.innerHTML = `Você tem ${idadeUsuario} anos, logo, já pode tirar a carteira de motorista.`

} else {
    p.innerHTML = `Você ainda tem ${idadeUsuario} anos, portanto, não pode tirar a carteira agora.`
}