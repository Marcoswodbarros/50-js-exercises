let p = document.querySelector('p');

const palavraUsuario = prompt('Digite uma palavra:');
const palavraConvertida = palavraUsuario.toLocaleLowerCase();
const vogais = ['a', 'á', 'ã', 'â', 'e', 'é', 'ê', 'i', 'í', 'î', 'o', 'ó', 'ô', 'õ', 'u', 'ú', 'û'];

let contador = 0;

for (let i = 0; i < palavraConvertida.length; i++) {
    const letra = palavraConvertida[i];

    if (vogais.includes(letra)) {
        contador++;
    }
}

p.innerHTML = `A palavra "${palavraUsuario}" contém ${contador} vogais.`
