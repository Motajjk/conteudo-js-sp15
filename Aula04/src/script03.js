// Operadores de Comparação

// Operador Comparativo de igualdade
let x = 100;
let comparadorIgualdade = (x == 200);
console.log(comparadorIgualdade);

console.log(" ");

// Operador Comparativo de Igualdade e Tipo
let comparadorIgualdadeTipo1 = (x === 100);
let comparadorIgualdadeTipo2 = (x === "100");
console.log(comparadorIgualdadeTipo1);
console.log(comparadorIgualdadeTipo2);

console.log(" ");

// Operador Comparativo de Não Igualdade (Diferença)
let comparadorDiferenca1 = (x != 200);
let comparadorDiferenca2 = (x != 100);
let comparadorDiferenca3 = (x != "100");
console.log(comparadorDiferenca1);
console.log(comparadorDiferenca2);
console.log(comparadorDiferenca3);

console.log(" ");

// Operador Comparativo de Não igualdade (Diferença) e Tipo
let comparadorDiferencaTipo1 = (x !== 200);
let comparadorDiferencaTipo2 = (x !== 100);
let comparadorDiferencaTipo3 = (x !== "100");
console.log(comparadorDiferencaTipo1);
console.log(comparadorDiferencaTipo2);
console.log(comparadorDiferencaTipo3);

console.log(" ");

// Operador Comparativo Maior Que
let maiorQue1 = (x > 100);
let maiorQue2 = (x > 50);
let maiorQue3 = (x > 200);
console.log(maiorQue1);
console.log(maiorQue2);
console.log(maiorQue3);

console.log(" ");

// Operador Comparativo Menor Que
let menorQue1 = (x < 100);
let menorQue2 = (x < 50);
let menorQue3 = (x < 200);
console.log(menorQue1);
console.log(menorQue2);
console.log(menorQue3);

console.log(" ");

// Operador Comparativo Maior ou Igual Que
let maiorIgualQue1 = (x >= 100);
let maiorIgualQue2 = (x >= 50);
let maiorIgualQue3 = (x >= 200);
console.log(maiorIgualQue1);
console.log(maiorIgualQue2);
console.log(maiorIgualQue3);

console.log(" ");

// Operador Comparativo Menor ou Igual que
let menorIgualQue1 = (x <= 100);
let menorIgualQue2 = (x <= 50);
let menorIgualQue3 = (x <= 200);
console.log(menorIgualQue1);
console.log(menorIgualQue2);
console.log(menorIgualQue3);

console.log(" ");

// Utilizando Operador de Comparação e Condição Lógica
let idade = 8;
let mensagem;

if (idade < 18) {
    mensagem = "Muito novo(a) para dirigir.";
    console.log(mensagem);
}