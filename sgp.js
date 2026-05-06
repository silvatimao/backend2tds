
//SISTEMA DE GERENCIAMENTO DE PERSONAGENS

function calcularPontuacaoTotal(historicoDePontos) {
const somarRodada = function(acumulador, pontosDaFase) {
const novaSoma = acumulador + pontosDaFase;
return novaSoma;
};

const pontuacaoFinal = historicoDePontos.reduce(somarRodada, 0);
return pontuacaoFinal;
};

function filtarMissoesConcluidas(listaDeMissoes) {
const verificarStatusDaMissao = function(missao) {
const foiFinalizada = missao.status === "concluída"; //=== igualdade ESTRITA
return foiFinalizada;
};

const apenasConcluidas = listaDeMissoes.filter(verificarStatusDaMissao);
return apenasConcluidas;
};

function atualizarInventario(inventarioAtual, acao, nomeDoItem) {
let novoInventario;

if (acao === "pegar"){
const inventarioComItemNovo = [inventarioAtual, nomeDoItem];
novoInventario = inventarioComItemNovo;
} else if (acao === "Descartar") {
const inventarioSemUltimoItem = inventarioAtual.slice();
novoInventario = inventarioSemUltimoItem;
} else {
novoInventario = inventarioAtual;
}
return novoInventario; //Retornar a mochila do jogador atualizada
};

const pontosDoJogador = [100, 5, 200, 50]
const total = calcularPontuacaoTotal(pontosDoJogador);
console.log("Pontuação final: ", total);

const missoes = [
{nome: "Salvar a aldeia", status: "concluída"},
{nome: "Encontrar o mapa", status: "em andamento"},
{nome: "Derrotar o chefão", status: "falhou"},
{nome: "Coletar recursos", status: "concluída"}
];

const concluidas = filtarMissoesConcluidas(missoes)
console.log("Missões concluídas " , concluidas);

const mochila = ["Mapa", "Lanterna"];
const mochila