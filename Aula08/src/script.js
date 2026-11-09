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