const numeroSenha = document.querySelector('.parametro-senha__texto');
const campoSenha = document.querySelector('#campo-senha');
const botoes = document.querySelectorAll('.parametro-senha__botao');
const checkboxes = document.querySelectorAll('.checkbox');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'.split('');
const numeros = '0123456789'.split('');
const simbolos = '!@#$%^&*()-_=+[]{}<>?/|'.split('');

let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', geraSenha);
});

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function pegaCaracteresDisponiveis() {
    const grupos = [];

    if (document.querySelector('input[name="maiusculo"]').checked) {
        grupos.push(letrasMaiusculas);
    }
    if (document.querySelector('input[name="minusculo"]').checked) {
        grupos.push(letrasMinusculas);
    }
    if (document.querySelector('input[name="numero"]').checked) {
        grupos.push(numeros);
    }
    if (document.querySelector('input[name="simbolo"]').checked) {
        grupos.push(simbolos);
    }

    if (grupos.length === 0) {
        return [...letrasMaiusculas, ...letrasMinusculas];
    }

    return grupos.flat();
}

function geraSenha() {
    const caracteresDisponiveis = pegaCaracteresDisponiveis();
    let senha = '';

    for (let i = 0; i < tamanhoSenha; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresDisponiveis.length);
        senha += caracteresDisponiveis[indiceAleatorio];
    }

    campoSenha.value = senha;
}

geraSenha();