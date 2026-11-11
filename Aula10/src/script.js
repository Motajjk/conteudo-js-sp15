// Funções

// Definindo valor padrão para parâmetros de função
function soma (a, b = 10) {
    return a + b;
}
console.log(soma(12, 30));

console.log(" ");

// Utilizando retorno de função em expressão
function multiplicar(a, b) {
    return (a * b);
}

let resultadoExpressao = multiplicar(20, 20) * 10;
console.log(resultadoExpressao);

console.log(" ");

// Função retornando String
function nomeCompleto(nome, sobrenome) {
    return (nome + " " + sobrenome);
}
console.log(nomeCompleto("Gustavo", "Mota"));

console.log(" ");

// Retorno para encerrar execução de função
function subtracao(a, b) {
    return "Quem gosta de SatoSugu é lerdão.";
// Vai parar aqui mesmo
    return (a, b);
}

console.log(subtracao(20, 7));

console.log(" ");

// Retorno em condição lógica
function verificarIdade(age) {
    if (age < 18) {
        return "Esse site é só para maiores de idade, volte quando tiver dezoito(18) anos.";
    }
    return "Você é maior de idade, prossiga e se divirta!";
}
console.log(verificarIdade(16));

console.log(" ");

// Retorne o valor no HTML
const elementoh3 = document.querySelector (".ex1");

function exibirMensagem () {
    return "Você é legal!";
}
elementoh3.innerHTML = exibirMensagem();

console.log(" ");

// Expressão de função
let multiplicar2 = function(a, b) {
    return a * b;
};
console.log(multiplicar2(50, 10));

console.log(" ");

// Expressão de função sendo retornada em uma função
function executarSaudacao(funcao) {
    return funcao();
}
let saudacao = function() {
    return "Oi, como cê ta? Eu... quero saber a cor da sua calcinha.";
};
console.log(executarSaudacao(saudacao));