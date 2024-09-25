// Variáveis globais para o cronômetro
let timerInterval;
let time = 0;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (timerInterval) return; // Evita iniciar múltiplos cronômetros

    timerInterval = setInterval(() => {
        time++;
        document.getElementById('timer').textContent = formatTime(time);
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    time = 0;
    document.getElementById('timer').textContent = "00:00";
}

// Função para sortear temas e perguntas
const temas = ["Tema 1", "Tema 2", "Tema 3", "Tema 4"];
const perguntas = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4"];

function sorteio(tipo) {
    let sorteado;
    if (tipo === 'tema') {
        sorteado = temas[Math.floor(Math.random() * temas.length)];
        document.getElementById('tema').textContent = sorteado;
    } else if (tipo === 'pergunta') {
        sorteado = perguntas[Math.floor(Math.random() * perguntas.length)];
        document.getElementById('pergunta').textContent = sorteado;
    }
}
