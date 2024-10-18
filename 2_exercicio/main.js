let p = document.querySelector('p');

const date = new Date();
let year = date.getFullYear();

let anoUsuario = prompt('Digite o seu ano de nascimento:');
let calculoDoAno = year - anoUsuario;

p.innerHTML = `Você tem ${calculoDoAno} anos de idade.`;