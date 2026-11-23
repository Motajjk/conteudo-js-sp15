//  Compreendendo o DOM

// Alterando Estilos dos Elementos com o JavaScript

// Alterando cor de Elemento
const elemento1 = document.querySelector("#ex1");

elemento1.style.color = "tomato";

// Alterando visibilidade de Elemento
const elemento2 = document.querySelector("#ex2");

function mostrarElemento () {
    elemento2.style.display = "block";
}

function esconderElemento () {
    elemento2.style.display = "none";
}