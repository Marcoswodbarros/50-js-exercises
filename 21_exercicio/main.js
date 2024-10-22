const form = document.querySelector('#formulario');
const input = document.querySelector('#tarefas');
const btn = document.querySelector('#btn');
const ol = document.querySelector('ol');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let li = document.createElement('li');
    li.innerHTML = input.value;
    ol.appendChild(li);

    input.value = '';
});
