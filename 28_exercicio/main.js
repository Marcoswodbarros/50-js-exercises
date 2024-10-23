let p = document.querySelector('p');

const selecionarOperação = prompt('Escolha uma das seguintes operações: (+) (-) (*) (/) (^).');
const primeiroNumero = Number(prompt('Digite o primeiro número:'));
const segundoNumero = Number(prompt('Digite o segundo número:'));

let resultado = 0;


switch (selecionarOperação) {
    case '+':
        resultado = primeiroNumero + segundoNumero;
        
    break;

    case '-':
        resultado = primeiroNumero - segundoNumero;
    break;

    case '*':
        resultado = primeiroNumero * segundoNumero;
    break;

    case '/':
        resultado = primeiroNumero / segundoNumero;
    break;

    case '^':
        resultado = primeiroNumero ** segundoNumero;
    break;

    default:
        alert('Erro. Atualize a página e tente novamente.');
}

p.innerHTML = `O resultado da operação é: ${resultado}.`
