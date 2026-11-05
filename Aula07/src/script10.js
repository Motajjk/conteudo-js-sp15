// Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor.
alert("Antecessor de valor informado pelo usuário");

let valorInformado = parseInt(prompt("Informe o número inteiro para retornar seu antecessor."))
let antecessor = valorInformado - 1;

alert("O antecessor de " + valorInformado + " é: " + antecessor);