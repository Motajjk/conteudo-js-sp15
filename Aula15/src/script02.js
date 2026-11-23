// Compreendendo o DOM

// Alterando Elemento
const elemento1 = document.querySelector("#ex1");

elemento1.innerHTML = "Aqueles que não conhecem a dor jamais entenderão a verdadeira paz."

// Alterando Atributo de Elemento
const elemento2 = document.querySelector("#ex2");

elemento2.src = "NamiSanji.jpeg";

console.log("");

// Adicionando Conteúdo Dinâmico com JavaScript
const elemento3 = document.querySelector("#ex3");

elemento3.innerHTML = Date();