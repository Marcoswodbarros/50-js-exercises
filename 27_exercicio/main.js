let p = document.querySelector('p');
let agenda = [];


while (true) {
    const pergunta = prompt('Você deseja adicionar uma nova tarefa? \nResponda com "sim" ou "não".');
    let evento = {};

    if (pergunta.toLowerCase() === "sim") {

        evento.nome = prompt('Qual evento você deseja salvar na agenda?');
        evento.data = prompt('Qual será a data do evento? (DD/MM/AAAA)');
        evento.hora = prompt('Qual será o horário do evento? (HH:MM)');

    } else {
        break;
    }

    agenda.push(evento);
}


agenda.sort((e1, e2) => {
    const dataHora1 = new Date(`${e1.data} ${e1.hora}`);
    const dataHora2 = new Date(`${e2.data} ${e2.hora}`);

    return dataHora1 - dataHora2;
});


for (const evento of agenda) {
    p.innerHTML += `Descrição do evento: ${evento.nome};</br>Data do evento: ${evento.data};</br>Horário do evento: ${evento.hora}.</br></br>`;
}
