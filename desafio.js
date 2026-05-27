
const nome = "Yamal";
const idade = 18;
const posicao = "Ponta-direita";
const time = "Barcelona";
const altura = 1.80;
const pesoEmKilos = 72;

console.log(`O jogador ${nome}, segue atuando como ${posicao} no time espanhol ${time}. E com apenas ${idade} anos de idade, já se encontra em tamanho adulto com ${altura} de altura e ${pesoEmKilos} quilos.`);

// 1. Declare 5 variáveis para representar uma viagem (Adicionado)
const destino = "Madri";
const diasDeViagem = 5;
const precoPassagem = 450.00;
const jaViajou = true;
const meioTransporte = "Trem";

console.log(`Viagem planejada para ${destino} de ${meioTransporte}. Duração de ${diasDeViagem} dias com custo de R$${precoPassagem}.`);


const precoChuteira = 1999.99;
const quantidade = 2;
const totalCompra = precoChuteira * quantidade;

console.log(`Ele irá comprar 2 pares de chuteira para utilizar o ano inteiro, o total do valor das duas chuteiras será de ${totalCompra} reais`);

const pontos1 = 1500;
const pontos2 = 1200;
const metaNivel = 1000; // Cada 1000 pontos sobe um nível

const totalPontos = pontos1 + pontos2;
const diferenca = pontos1 - pontos2;

const nivelCalculado = totalPontos / metaNivel;
const pontosRestantes = 3000 - totalPontos;

console.log(`
--- PLACAR FINAL ---
Total de Pontos: ${totalPontos}
Diferença entre Fases: ${diferenca}
Nível aproximado: ${nivelCalculado}
Pontos para o próximo objetivo: ${pontosRestantes}
`);


// 4. Exibir status do jogador (Adicionado)
const nivelAtual = 2;
const estaBanido = false;

const eAvancado = nivelAtual >= 5;
const podeParticiparTorneio = nivelAtual >= 2 && !estaBanido;

console.log(`
--- STATUS DO JOGADOR ---
Jogador Avançado: ${eAvancado ? "Sim" : "Não"}
Está Banido: ${estaBanido ? "Sim" : "Não"}
Pode participar de torneios: ${podeParticiparTorneio ? "Sim" : "Não"}
`);


// Resposta à pergunta do comentário:
// Os processos de "Calcular Placar" e "Verificar Status" podem ser alterados para uma função,
// pois eles recebem dados (pontos/nível) e processam uma ação que se repete para vários jogadores.

// Função que reproduz o comportamento de ação (Adicionado)
function gerenciarJogador(p1, p2, banido) {
const total = p1 + p2;
const nvl = total / 1000;
const torneio = nvl >= 2 && !banido;

return `O jogador fez ${total} pontos (Nível ${nvl}) e status torneio: ${torneio ? "Liberado" : "Bloqueado"}.`;
}

// Executando a função de forma interpolada
console.log(`Resultado da Função: ${gerenciarJogador(1500, 1200, false)}`);