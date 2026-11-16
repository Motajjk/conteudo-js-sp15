// Objetos

// Construtores de Objetos
// const pessoa = {
//     nome: "Gustavo",
//     sobrenome: "Mota",
//     idade: 23,
//     altura: 1.73,
// };

function Pessoa(nome, sobrenome, idade, altura) {
    this.nomePessoa = nome;
    this.sobrenomePessoa = sobrenome;
    this.idadePessoa = idade;
    this.alturaPessoa = altura;
}

const minhaPessoa = new Pessoa("Gustavo", "Mota", 23, 1.73);

console.log(minhaPessoa);

minhaPessoa.carro = "Nissan GT-R";