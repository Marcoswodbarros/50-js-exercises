const p = document.querySelector('p');

// Quantidade de livros
const quantidadeDeLivros = parseInt(prompt('Digite quantos livros você irá comprar:'));

// Valor total da compra
let valorTotalDaCompra = 0;

// Valor de cada livro
for (let i = 0; i < quantidadeDeLivros; i++) {
    let precosDosLivros = parseFloat(prompt('Digite o preço deste livro:'));
    valorTotalDaCompra += precosDosLivros;
}

if (quantidadeDeLivros <= 1) {
    p.innerHTML = `O valor total da compra deste livro é de: R$${(valorTotalDaCompra.toFixed(2))}.`;

} else {
    p.innerHTML = `O valor total da compra destes ${quantidadeDeLivros} livros é de: R$${(valorTotalDaCompra.toFixed(2))}.`;
}
