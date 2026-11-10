// Funções

// Função de Multiplicação
function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(10, 3));
console.log(multiplicar(2, 4));
console.log(multiplicar(8, 5));
console.log(multiplicar(7, 7));

console.log(" ");

// Função de Adição
function adicao(a, b) {
    return a + b;
}

console.log(adicao(60, 7));
console.log(adicao(40, 2));
console.log(adicao(600, 22));
console.log(adicao(500, 500));

console.log(" ");

// Função de Subtracao
function subtracao (a, b) {
    return a - b;
}

console.log(subtracao(69, 2));
console.log(subtracao(100, 2));
console.log(subtracao(500, 400));
console.log(subtracao(1000, 100));

console.log(" ");

// Função de Divisão
function divisao(a, b) {
    return a / b;
}

console.log(divisao(67, 1));
console.log(divisao(40, 2));
console.log(divisao(900, 30));
console.log(divisao(10000, 10));

console.log(" ");

// Função com um parâmetro
function paraCelsius(grausFahrenheit) {
let calculoConversao = (5/9) * (grausFahrenheit - 32);
return `O valor de ${grausFahrenheit}°F é, em graus celsius, é ${calculoConversao}°C.`; 

}

console.log(paraCelsius(95));