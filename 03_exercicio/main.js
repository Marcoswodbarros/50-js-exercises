let p = document.querySelector('p');

const grausCelsius = prompt("Digite a temperatura em graus Celsius para realizar a conversão:");
const conversaoParaFahrenheit = (grausCelsius * 9/5) + 32;

p.innerHTML = `${grausCelsius} ºC é equivalente à ${conversaoParaFahrenheit.toFixed(2)} ºF.`