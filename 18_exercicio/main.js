const p = document.querySelector('p');

const precoOriginal = parseFloat(prompt('Digite o preço do produto:'));
const porcentagemDeDesconto = parseInt(prompt('Digite a porcentagem de desconto:'));
const calculoDoDesconto = (porcentagemDeDesconto / 100) * precoOriginal;
const precoFinal = precoOriginal - calculoDoDesconto;

p.innerHTML = `Com o desconto de ${porcentagemDeDesconto}% aplicado, o valor final do produto é de: R$${precoFinal.toFixed(2)}.`