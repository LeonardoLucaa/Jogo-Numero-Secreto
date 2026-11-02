const NUMERO_MINIMO = 1;
const NUMERO_MAXIMO = 10;

const campoChute = document.getElementById('chute');
const botaoChutar = document.getElementById('chutar');
const botaoReiniciar = document.getElementById('reiniciar');
const textoMensagem = document.getElementById('mensagem');
const textoTentativas = document.getElementById('tentativas');

let numeroSecreto;
let tentativas;

function gerarNumeroSecreto() {
    const quantidade = NUMERO_MAXIMO - NUMERO_MINIMO + 1;
    return Math.floor(Math.random() * quantidade) + NUMERO_MINIMO;
}

function exibirMensagem(texto) {
    textoMensagem.textContent = texto;
}

function atualizarTentativas() {
    textoTentativas.textContent = `Tentativas: ${tentativas}`;
}

function tremerCampo() {
    campoChute.classList.remove('erro');
    // Força o navegador a reiniciar a animação.
    void campoChute.offsetWidth;
    campoChute.classList.add('erro');
}

function iniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    tentativas = 0;

    campoChute.value = '';
    campoChute.disabled = false;
    botaoChutar.disabled = false;
    botaoReiniciar.disabled = true;

    exibirMensagem(`Escolha um número entre ${NUMERO_MINIMO} e ${NUMERO_MAXIMO}`);
    atualizarTentativas();
    campoChute.focus();
}

function finalizarJogo() {
    const palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    exibirMensagem(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

    campoChute.disabled = true;
    botaoChutar.disabled = true;
    botaoReiniciar.disabled = false;
    botaoReiniciar.focus();
}

function verificarChute() {
    const chute = Number(campoChute.value);
    const chuteValido = campoChute.value !== ''
        && Number.isInteger(chute)
        && chute >= NUMERO_MINIMO
        && chute <= NUMERO_MAXIMO;

    if (!chuteValido) {
        exibirMensagem(`Digite um número inteiro de ${NUMERO_MINIMO} a ${NUMERO_MAXIMO}`);
        tremerCampo();
        campoChute.focus();
        return;
    }

    tentativas++;
    atualizarTentativas();

    if (chute === numeroSecreto) {
        finalizarJogo();
        return;
    }

    const dica = chute > numeroSecreto ? 'menor' : 'maior';
    exibirMensagem(`O número secreto é ${dica} que ${chute}`);
    tremerCampo();
    campoChute.value = '';
    campoChute.focus();
}

botaoChutar.addEventListener('click', verificarChute);
botaoReiniciar.addEventListener('click', iniciarJogo);
campoChute.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
        verificarChute();
    }
});

iniciarJogo();
