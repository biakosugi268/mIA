const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const barra = document.querySelector(".barra");

const perguntas = [
  {
    enunciado: "Ao sair da escola, você descobre um chat de IA capaz de responder qualquer pergunta, criar imagens e gerar vozes realistas. Qual é sua reação inicial?",
    alternativas: [
      { texto: "Fiquei desconfiado(a) e até um pouco assustado(a) com tanto poder.", afirmacao: "No começo, surgiu um certo receio sobre o que essa tecnologia poderia fazer." },
      { texto: "Achei fascinante e já comecei a imaginar como poderia usar no dia a dia.", afirmacao: "O entusiasmo foi imediato, junto com a vontade de explorar todo o seu potencial." }
    ]
  },
  {
    enunciado: "Sua professora de tecnologia propõe um trabalho sobre como a IA pode ser usada em sala de aula. Como você decide começar a pesquisa?",
    alternativas: [
      { texto: "Uso ferramentas de busca com IA para encontrar informações e entender de forma simples.", afirmacao: "As ferramentas de IA ajudaram a encontrar e compreender conteúdos de maneira prática." },
      { texto: "Prefiro pesquisar em sites e conversar com colegas para escrever com minhas próprias palavras.", afirmacao: "O trabalho foi construído com base no diálogo e na pesquisa tradicional." }
    ]
  },
  {
    enunciado: "No debate da turma sobre o impacto da IA no trabalho do futuro, qual é o seu ponto de vista?",
    alternativas: [
      { texto: "A IA vai criar novas oportunidades e impulsionar habilidades humanas.", afirmacao: "Houve a defesa de que a IA abrirá portas e estimulará a inovação." },
      { texto: "Devemos proteger empregos e pensar em como usar IA sem prejudicar trabalhadores.", afirmacao: "O posicionamento foi voltado para o uso justo da tecnologia, preservando empregos." }
    ]
  },
  {
    enunciado: "Você precisa criar uma imagem que represente sua opinião sobre a IA. O que faz?",
    alternativas: [
      { texto: "Uso um programa de design tradicional para desenhar.", afirmacao: "O resultado trouxe um toque manual e artístico para a criação." },
      { texto: "Uso um gerador de imagens com IA para agilizar o processo.", afirmacao: "A produção foi acelerada pelo uso de geradores de imagem inteligentes." }
    ]
  },
  {
    enunciado: "No trabalho em grupo de biologia, um colega usou a IA para fazer o texto inteiro e ficou igual ao original do chat. O que você faz?",
    alternativas: [
      { texto: "Acho que não tem problema, afinal escrever comandos também é uma forma de contribuir.", afirmacao: "Com o tempo, houve uma maior dependência da IA para realizar tarefas." },
      { texto: "Reviso, adapto e acrescento nossas próprias ideias para que tenha um toque humano.", afirmacao: "O texto final ganhou identidade própria ao misturar ideias humanas com apoio da IA." }
    ]
  }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  caixaPerguntas.textContent = perguntas[atual].enunciado;
  caixaAlternativas.innerHTML = "";
  barra.style.width = ((atual) / perguntas.length) * 100 + "%";
  perguntas[atual].alternativas.forEach(alternativa => {
    const botao = document.createElement("button");
    botao.textContent = alternativa.texto;
    botao.onclick = () => respostaSelecionada(alternativa);
    caixaAlternativas.appendChild(botao);
  });
}

function respostaSelecionada(opcao) {
  historiaFinal += opcao.afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = "No futuro, sua trajetória com a Inteligência Artificial se desenhou assim: " + historiaFinal.trim();
  caixaAlternativas.innerHTML = "";
  barra.style.width = "100%";
}

mostraPergunta();
