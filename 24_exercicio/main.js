let body = document.querySelector('body');
let formulario = document.querySelector('form');
let usuario = document.querySelector('#user');
let senha = document.querySelector('#password');
let btn = document.querySelector('#btn');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (usuario.value.length < 5) {
        alert('O campo "usuário" precisa ter no mínimo 5 caracteres.');
        
    } else if (senha.value.length < 5) {
        alert('O campo "Senha" precisa ter no mínimo 5 caracteres.');
        
    } else {
        formulario.style.display = 'none';

        let p = document.createElement('p');
        p.innerHTML = 'Login realizado com sucesso.'
        body.appendChild(p);
    }
});
