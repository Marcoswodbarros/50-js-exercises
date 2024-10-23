// Elemento HTML
let p = document.querySelector('p');


// Selecionar Unidades
const unidadeEscolhida = prompt('Você deseja calcular a temperatura ou o comprimento:');


// Execução
if (unidadeEscolhida.toLowerCase() === "temperatura") {
    let temperaturaEscolhida = prompt('Você deseja saber a temperatura em graus Celsius ou Fahrenheit?');

    if (temperaturaEscolhida.toLowerCase() === "fahrenheit") {
        let grausParaFahrenheit = Number(prompt('Digite a temperatura para conversão em graus Fahrenheit:'));
        let grausFahrenheit = calculaFahrenheit(grausParaFahrenheit);

        p.innerHTML = `${grausParaFahrenheit} ºC equivale a ${grausFahrenheit} ºF.`

    } else {
        let grausParaCelsius = Number(prompt('Digite a temperatura para conversão em graus Celsius:'));
        let grausCelsius = calculaCelsius(grausParaCelsius);

        p.innerHTML = `${grausParaCelsius} ºF equivale a ${grausCelsius} ºC.`
    }

} else if (unidadeEscolhida.toLowerCase() === "comprimento") {
    let comprimentoEscolhido = prompt('Você deseja converter M (metros) ou P (pés)?');

    if (comprimentoEscolhido.toLowerCase() === 'p') {
        let metrosParaPes = Number(prompt('Digite a distância para conversão em Pés:'));
        let pes = calculaPes(metrosParaPes);

        p.innerHTML = `${metrosParaPes} m = ${pes} p.`

    } else {
        let pesParaMetros = Number(prompt('Digite a distância para conversão em Metros:'));
        let metros = calculaMetros(pesParaMetros);

        p.innerHTML = `${pesParaMetros} p = ${metros} m.`
    }

} else {
    alert('Atualize a página e digite uma opção válida.')
}


// Functions
function calculaCelsius(f) {
    return (f - 32) * (5 / 9);
}

function calculaFahrenheit(c) {
    return (c * (9 / 5)) + 32;
}

function calculaMetros(p) {
    return p * 0.3048;
}

function calculaPes(m) {
    return m * 3.28084;
}