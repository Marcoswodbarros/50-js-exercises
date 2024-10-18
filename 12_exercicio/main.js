let p = document.querySelector('p');
let listaDeNumeros = [];

for (let i = 0; i <= 100; i++) {

    if (i % 2 == 0) {
        listaDeNumeros.push(i);
    }

    p.innerHTML = `${listaDeNumeros.join(' - ')}.`;
}
