const idade = 15;
const MaiorDeIdade = idade >= 18;


//Operador E
const possuiCNH = false;
const podeDirigir = MaiorDeIdade && possuiCNH;
console.log("pode dirigir?" + podeDirigir);

const podeViajarSozinho = MaiorDeIdade || possuiCNH;
console.log("pode viajar sozinho? + podeViajar");
git add operadores.js
git commit -m ""