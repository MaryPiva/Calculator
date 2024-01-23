let display = document.getElementById('display');
let expressao = '';

function limpar() {
    expressao = '';
    atualizarDisplay();
}

function adicionarNumero(numero) {
    expressao += numero;
    atualizarDisplay();
}

function adicionarOperacao(operacao) {
    expressao += operacao;
    atualizarDisplay();
}

function calcular() {
    try {
        expressao = eval(expressao).toString();
        atualizarDisplay();
    } catch (error) {
        expressao = 'Erro';
        atualizarDisplay();
    }
}

function atualizarDisplay() {
    display.value = expressao;
}
