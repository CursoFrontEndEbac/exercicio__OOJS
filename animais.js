function Animal(nome,idade) {
    this.nome = nome;
    this.idade = idade;
}

function Cachorro (nome,idade,raca,porte) {
    this.raca = raca;
    this.porte= porte;

    Animal.call(this, nome,idade);
}

function Gato ( nome,idade,pelo,temperamento) {
    this.pelo = pelo;
    this.temperamento = temperamento;
    
    Animal.call(this, nome,idade);
}

const cachorro = new Cachorro ('Cascao',10,'vira-lata','porte medio');
const gato1 = new Gato ( 'Luna',2 ,'curto', 'arisca');
const gato2 = new Gato ('Bolinha', 1 ,'grande', 'manso');

console.log(cachorro)
console.log(gato1)
console.log(gato2)