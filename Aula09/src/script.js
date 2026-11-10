// Laços de repetição (Loops)

// Laço for
for (let acumuladora = 0; acumuladora <=10; acumuladora++) {
    console.log(acumuladora);
}

console.log(" ");

const carros = ["Gol", "Porsche", "Ferrari", "Lamborghini"];
let tamanhoArray = carros.length;

for(let acumuladora = 0; acumuladora < tamanhoArray; acumuladora++) {
    console.log(carros[acumuladora]);
}

console.log(" ");

let i, x = '';
for (i = 0; i <= 5; i++) {
    x += i;
}
console.log(x);

console.log(" ");

// Laço While
let acumuladora = 0;
while (acumuladora <= 10) {
    console.log(acumuladora);
    acumuladora++
}

console.log(" ");

// Laço Do While
let acumuladora2 = 0;
do {
    console.log(acumuladora2);
    acumuladora2++
}

while (acumuladora2 <= 10);

console.log(" ");

// Calculadora com Do While

let condicao;

do {
    alert("Calculadora");
    let numero1 = parseFloat(prompt("Informe o primeiro número do cálculo: "));
    let operador = prompt("Infome o operador aritmético: ");
    let numero2 = parseFloat(prompt("Informe o segundo número do cálculo"));

    switch (operador) {
        
            case "+":
            let soma = numero1 + numero2;
            alert(`${numero1} + ${numero2} = ${soma}`);
            break;

            case "-":
            let subtracao = numero1 - numero2;
            alert(`${numero1} - ${numero2} = ${subtracao}`);
            break;

            case "*":
            let multiplicacao = numero1 * numero2;
            alert(`${numero1} * ${numero2} = ${multiplicacao}`);
            break;

            case "/":
            let divisao = numero1 / numero2;
            alert(`${numero1} / ${numero2} = ${divisao}`);
            break;
    }

    condicao = prompt("Você deseja continuar calculando (s/n)?");
}

while (condicao === "s");