const p = document.querySelector('p');

const votosTotais = {};

let opcaoMaisVotada = "";
let maxVotos = 0;

while (true) {
    const opcao = prompt("Digite uma opção de voto ou 'sair' para encerrar: ");

    if (opcao.toLowerCase() === "sair") {
        break;
    }

    // Adiciona a opção de voto ao objeto votos e atualiza o número de votos
    votosTotais[opcao] = (votosTotais[opcao] || 0) + 1;

    // Verifica se a opção atual tem mais votos do que a opção mais votada até agora
    if (votosTotais[opcao] > maxVotos) {
        maxVotos = votosTotais[opcao];
        opcaoMaisVotada = opcao;
    }
}


const opcoesEmpatadas = Object.keys(votosTotais).filter(
    (opcao) => votosTotais[opcao] === maxVotos
);

if (opcoesEmpatadas.length === 1) {
    p.innerHTML = `A opção mais votada é: ${opcaoMaisVotada}`;

} else {
    p.innerHTML = `Empate entre as opções: ${opcoesEmpatadas.join(", ")}.`;
}
