//Calcladora de IMC

let nome = "Clara";
let peso = 65;
let altura = 1.68;

//Função que calcula e retorna o IMC
function calcularIMC(peso, altura){
    let imc =peso / (altura * altura) 
};

let resultado = calcularIMC(peso, altura)
console.log(`IMC de ${nome}: ${resultado}`);
