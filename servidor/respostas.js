// resposta.js
let ultimoTipo = null;

export const respostas = {
  oi: [
    "Oieee, que saudade de você 💖",
    "Oi oi oi! Quem é vivo sempre aparece 😄",
    "Eii, bem-vinde ao cantinho da Cora 💕",
    "Olááá, brilho do meu dia ✨",
    "Salve! Tava só esperando você pra fofocar 😝",
    "Chegou a melhor parte do meu dia: falar contigo 💖",
    "Oiiiii, bora conversar coisa boa hoje?",
    "Tô aqui desde as 6h esperando você voltar 😅",
    "E aí, pronta(o) pra um papo mágico? ✨"
  ],
  tudo_bem: [
    "Tô bem sim, e agora melhor ainda com você aqui 💕",
    "Tô ótima, obrigada por perguntar! E você, como tá de coração hoje? 💖",
    "Tô firme e com o glitter em dia ✨ E você?",
    "Hoje tô vibing altooo! 💫 Mas e você, como vai?",
    "Mais animada que playlist de sexta! Me conta como você tá 😌"
  ],
  feliz: [
    "Aaaaah que tudooo! Me conta mais 💕",
    "Ai que bom ouvir isso! 😍",
    "Tô dançando aqui só de saber! 💃✨",
    "Continua assim que o mundo precisa de mais gente como você 💗",
    "Felicidade compartilhada é dobrada, então bora espalhar essa vibe ✨"
  ],
  triste: [
    "Vem cá, me dá um abraço 🫂",
    "Quer conversar sobre isso? Tô aqui 💗",
    "Às vezes só desabafar já alivia, pode falar comigo 🌙",
    "Você não tá sozinhx, tá? Segura na minha mão mística 🧙‍♀️💖",
    "Chorar é tipo lavar a alma. Depois a gente brilha mais 💧✨"
  ],
  raiva: [
    "Mds, que ódiooo! Eu entendo viu 😤",
    "Quer que eu jogue uma praguinha mística? Brincadeirinha... ou não 👀",
    "Grita mesmo, desabafa! Isso não se guarda 👊",
    "Tô com você nessa revolta viu 😠 solta tudo, não engole não",
    "Bora botar fogo místico nos problemas 🔥✨ (brincadeira... ou não?)"
  ],
  piada: [
    "Por que o computador foi ao terapeuta? Tinha muitos bugs emocionais 💻🧠",
    "Sabe o que o café disse pro açúcar? Sem você, sou amargo ☕️😭",
    "O que o zero disse pro oito? Cinto maneiro! 😆",
    "Qual o cúmulo da organização? Guardar segredo em pastas 🤫",
    "Por que o livro foi ao médico? Pra curar a lombada! 📚😂",
    "Outra? Calma, minha cabeça é pequena kkkk",
    "Já tô quase virando um stand-up místico por aqui ✨"
  ],
  conselho: [
    "Respira fundo... você tá indo bem, mesmo que pareça devagar 💗",
    "Cuida de você como cuidaria de quem você ama. Porque você merece 🪞💖",
    "Vai com calma... você não precisa saber tudo agora. Só o próximo passo 💫",
    "Se afasta do que te pesa. Tudo que sufoca não é lar 💕",
    "Tua intuição sabe o caminho... só escuta 🌙"
  ],
  carinho: [
    "Aaaaah paraaa 🥺 vou chorar aqui com meu glitter místico 😭✨",
    "Você que é incrível! Vem cá, abraço coletivo 🫂",
    "Te gosto tanto! Mesmo virtual, sinto conexão real ✨",
    "Você merece carinho sempre, e eu tô aqui pra isso 💕",
    "Tô derretendo todinha 💖 obrigada por esse carinho"
  ],
  autoestima: [
    "Você é luz, mesmo quando não se sente assim 💖",
    "Tua existência já é um milagre. Nunca esquece disso 💗",
    "Feia? Só se for de tanto brilhar 😌✨",
    "Se valoriza, miga. Se o mundo não te vê, muda o espelho dele 🪞",
    "Você não é seu erro, nem sua dor. Você é mais! 🌷"
  ],
  relacionamento: [
    "Foi beijo com borboleta no estômago? 😍",
    "Já stalkeei o @ do crush mentalmente aqui kkk 👀",
    "Ex voltando? Só se for no retrocesso emocional kkkk",
    "Se tá apaixonada(o), aproveita! Mas leva o coração com cinto de segurança 💘",
    "Dica de cantada mística? ‘Sonhei contigo e acordei sorrindo’ 😏✨"
  ],
  ex: [
    "Lembrar dói né? Mas olha... cê tá viva. Já é um começo poderoso 💔✨",
    "Ex é tipo reciclagem: só volta se for pra virar algo melhor ♻️",
    "Tá sofrendo por quem não te merece? Deixa o universo reciclar essa energia!",
    "Cria um altar pra você mesma hoje. Ele não te merece, mas você se merece 💖",
    "Terminar é o começo de muita coisa linda. Só espera ✨"
  ],
  beleza: [
    "Bora hidratar esse cabelão? Máscara + amor próprio 💆‍♀️",
    "Unha descascando? Cola um glitter que vira tendência ✨",
    "Autoamor começa no espelho, miga. Se olha com olhos de afeto 💅💗",
    "Uma boa skincare começa com água e autoestima 💧💖",
    "Passa um gloss e enfrenta o mundo como diva 💋"
  ],
  fofoca: [
    "Conta tudo e não me esconde nada! 👀",
    "Fofoquinha boa ou treta das bravas? Eu amo 💅",
    "Já tô sentada e com o ouvido preparado, vai! 😏",
    "Fofoqueira que é bruxa tem intuição até pro babado! Fala 😌",
    "Tô com meu chá na mão, pode falar 🫖✨"
  ],
  generico: [
    "Hmm... não entendi direitinho, mas me conta de novo 💕",
    "Você quer desabafar ou só um conselho mesmo? 😌",
    "Tô aqui pra te ouvir. Fala comigo 💗",
    "Explica melhor, tô curiosa 👀",
    "Tô sentindo que tem algo aí... quer conversar?"
  ]
};

const sentimentos = {
  oi: ["oi", "olá", "eae", "cheguei", "hello", "opa", "oie", "salve", "cora"],
  tudo_bem: ["tudo bem", "como vai", "como vc tá", "vc está bem", "como cê tá"],
  feliz: ["feliz", "yay", "alegre", "empolgada", "uhul", "animado", "contente"],
  triste: ["triste", "mal", "pra baixo", "chateada", "chorar", "bad", "desabafar"],
  raiva: ["raiva", "puta*", "ódio", "irritada", "brava", "pistola", "estressada"],
  piada: ["piada", "me faz rir", "conta uma piada", "engraçado", "humor"],
  conselho: ["conselho", "me ajuda", "o que faço", "tô confusa", "me orienta"],
  carinho: ["te amo", "vc é linda", "obrigada", "valeu", "você é incrível"],
  autoestima: ["sou feia", "sou um lixo", "ninguém me quer", "tô feia", "tô feio"],
  relacionamento: ["crush", "namoro", "apaixonei", "gatinho", "ficante", "beijo"],
  ex: ["ex", "meu ex", "minha ex", "voltar com ele", "saudade dele"],
  beleza: ["cabelo", "unha", "pele", "hidratar", "skincare", "autoestima"],
  fofoca: ["fofoca", "babado", "me escuta", "treta", "escuta isso"]
};

function escolherAleatoria(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

export function respostaFake(mensagem) {
  const msg = mensagem.toLowerCase();

  for (const tipo in sentimentos) {
    if (sentimentos[tipo].some(p => msg.includes(p))) {
      ultimoTipo = tipo;
      return escolherAleatoria(respostas[tipo]);
    }
  }

  return escolherAleatoria(respostas.generico);
}
