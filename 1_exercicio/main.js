const nomeUsuario = prompt('Qual é o seu nome?');
let h1 = document.querySelector('h1');

h1.innerHTML = `Olá, ${nomeUsuario}!`;