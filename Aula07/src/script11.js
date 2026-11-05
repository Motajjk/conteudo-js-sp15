// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.
alert("Idade em dias");

let idadeAnos = parseInt(prompt("Informe quantos anos completos você tem: "));
let idadeMeses = parseInt(prompt("Informe quantos meses se passaram desde o seu útlimo aniversário: "));
let idadeDias = parseInt(prompt("Informe quantos dias se passaram desde que completou mais um mês após o seu aniversário: "));

let anosEmDias = idadeAnos * 365;
let mesesEmDias = idadeMeses * 30;
let idadeEmDias = anosEmDias + mesesEmDias + idadeDias;

alert("Sua idade em dias é de aproximadamente: " + idadeEmDias + " dias");