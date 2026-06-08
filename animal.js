const animal = {
nome: "TikiTiki", //string
especie: "Lagosta", //string
idade: 4, //number
tutor: false,
vacinado: true
}

//console.log(animal);
console.log(animal.nome);
console.log(animal.tutor);

animal.idade = 6;
//console.log(animal);

console.log(`${animal.nome}é um ${animal.especie}com a idade ${animal.idade} e possui sua vacina em dia a dia ${animal.vacinado})