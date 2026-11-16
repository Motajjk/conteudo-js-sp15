// Objetos

// Acessando Porpriedades
const pessoa = {
    nome: "Gustavo",
    ultimoNome: "Anjos",
};

let notacaoEmPonto = pessoa.nome;
console.log(notacaoEmPonto);

let meuUltimoNomePropriedade = "ultimoNome";
let notacaoColchetes = pessoa[meuUltimoNomePropriedade];
console.log(notacaoColchetes);

console.log("");

// Atualizando, Criando e Apagando Propriedades de Objeto
pessoa.nome = "uResh";
console.log(pessoa.nome);

pessoa.anoNascimento = 2009;
console.log(pessoa.anoNascimento);

delete pessoa.ultimoNome
console.log(pessoa.ultimoNome);

console.log("");

// Verificando existência de Propriedades em Objetos
let resultado = ("altura" in pessoa);
console.log(resultado);

console.log("");

// Objetos Aninhados
const pessoa2 = {
    nome: "Gustavo",
    idade: 23,
    meuCarro: {
        marca: "Nissan",
        modelo: "GT-R",
        ano: 2020,
    },
};
console.log(pessoa2);
console.log(pessoa2.meuCarro);

console.log("");

// métodos em Objetos
const carro = {
    marca: "Lamborghini",
    modelo: "Veneno",
    ano: 2022,
    acelerar: function() {
        return `A ${this.marca} ${this.modelo} acelerou.`;
    }
};
console.log(carro.acelerar());

console.log("");

// Adicionando Método em um Objeto
carro.estacionar = function() {
    return `A ${this.marca} ${this.modelo} estacionou.`
};

console.log(carro.estacionar());
