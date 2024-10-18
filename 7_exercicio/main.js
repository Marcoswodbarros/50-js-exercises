let p = document.querySelector('p');

const precoInicial = prompt('Digite o preço do produto:');
const taxaDesconto = prompt('Digite a taxa de desconto:');

const calculoDesconto = (taxaDesconto / 100) * precoInicial;
const precoFinal = precoInicial - calculoDesconto;

p.innerHTML = `O preço do produto com o desconto aplicado é de: R$${precoFinal.toFixed(2)}.`