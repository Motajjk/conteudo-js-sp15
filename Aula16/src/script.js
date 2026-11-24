// Evento em Click com o addEventListener()
const meuParagrafo = document.querySelector("#ex1-p");
const meuBtn = document.querySelector("#ex1-btn");

meuBtn.addEventListener ("click", () => {
    const temEstilo = meuParagrafo.classList.toggle("estilo");

    if (temEstilo) {
        meuParagrafo.textContent = "GojoHime é o melhor shipp de Jujutsu Kaisen!";
    }else{
        meuParagrafo.textContent = "Qual é o melhor shipp de Jujutsu Kaisen?";
    }
});

// Evento em Mouseover e Mouseou com o addEventListener()
const meuParagrafo2 = document.querySelector("#ex2-p");

meuParagrafo2.addEventListener("mouseover", () => {
    meuParagrafo2.innerHTML = "O mouse está sobre o parágrafo.";
});

meuParagrafo2.addEventListener("mouseout", () => {
    meuParagrafo2.innerHTML = "O mouse está fora do parágrafo.";
});


// Mostrando posição do Mouse com o Evento
const paragrafoX = document.querySelector("#ex3-p1");
const paragrafoY = document.querySelector("#ex3-p2");

document.addEventListener("mousemove", (event) => {
    paragrafoX.innerHTML = `X: ${event.clientX}`;
});

document.addEventListener("mousemove", (event) => {
    paragrafoY.innerHTML = `Y: ${event.clientY}`
});