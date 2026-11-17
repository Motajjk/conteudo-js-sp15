// Arrays

// Primeiro Array
const frutas = ["Maçã", "Banana", "Uva", "Laranja"];
console.log(frutas);

console.log("");

// Array com itens adicionados posteriormente
const carros = [];

carros[0] = "Lamborghini";
carros[1] = "Nissan";
carros[2] = "Ferrari";

console.log(carros);

console.log("");

// Criando Array com Construtor
const animes = new Array("One Piece", "Jujutsu Kaisen", "Boku no Hero", "Naruto");
console.log(animes);

console.log("");

// Acessando Elementos de Arrays
const frutas2 = ["Melão", "Melancia", "Pera"];
let fruta1 = frutas2[0];
let fruta2 = frutas2[1];
let fruta3 = frutas2[2];

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);

console.log("");

// Alterando Elemento de Array
const jogos = ["Call of Duty", "Rainbow Six Siege", "EA FC"];
console.log(jogos);

jogos[2] = "Tomb Raider";
console.log(jogos);

console.log("");

// Convertendo Array para String
const animes2 = ["86-Eigthy Six", "Ao no Hako", "Kaguya-sama"];

let animes2String = animes2.toString();
console.log(animes2String);

console.log("");

// Utilizando a Propriedade Length
let comprimentoAnimes2 = animes2.length;
console.log(comprimentoAnimes2);

console.log("");

// Acessando o Último Item do Array
const animes3 = ["Boruto Two Blue Vortex", "One Punch Man", "Mushoku Tensei", "Tensei Shitara Datta Ken", "Tokyo Revengers", "Nanatsu no Taizai"];

let comprimentoAnimes3 = animes3.length;
console.log(comprimentoAnimes3);

let ultimoItemAnimes3 = comprimentoAnimes3 - 1;
console.log(animes3[ultimoItemAnimes3]);

console.log("");

// Utilizando Laço de Repetição para Percorrer o Array
const personagens = ["Ghost", "Soap", "Price", "Gaz"];
let quantidadePersonagens = personagens.length;

console.log(personagens);
console.log(quantidadePersonagens);

for (let acumuladora = 0; acumuladora < quantidadePersonagens; acumuladora++) {
    console.log(personagens[acumuladora]);  
}

console.log("");

// Percorrendo Array com Método ForEach
personagens.forEach((personagem) => {
    console.log(personagem);    
});

console.log("");

// Adicionando Elementos no Array com Método Push
console.log(personagens);
personagens.push("Laswell", "Alejandro", "Pharah", "Alex");
console.log(personagens);

console.log("");

// Adicionando Elementos no Array com a propriedade Length
personagens[personagens.length] = "Rodolfo";
console.log(personagens);

console.log("");

// Exemplo de Índices Altos sendo preenchidos em Array e Gerando Buracos
personagens[17] = "Valeria";
console.log(personagens);

console.log("");

// 