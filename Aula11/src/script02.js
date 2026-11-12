// Objetos

// Objetos em JavaScript
const carro = {
    marca: "Porshe",
    modelo: 911,
    cor: "Laranja",
    ano: 2022,
};

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.cor);
console.log(carro.ano);

console.log(" ");

const pessoa = {
    nome: "Gustavo" + " " + "Mota",
    idade: 23,
    namoro: false,
    altura: 1.73,

    exibirInformacoes: function() {
        
        let saidaNamorar;

        if (this.namoro === true) {
            saidaNamorar = "Sim.";
        } else {
            saidaNamorar = "Não.";
        }

        return `
        Meu nome é: ${this.nome}
        Minha idade é: ${this.idade}
        Minha altura é: ${this.altura}
        Eu namoro?: ${saidaNamorar}`;
    }
};
console.log(pessoa.exibirInformacoes());