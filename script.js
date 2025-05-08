const chatBox = document.getElementById("chat");
const userInput = document.getElementById("mensagem");
const sendButton = document.getElementById("enviar");
const coraVideo = document.getElementById("cora-video");
const coraVideoSource = document.getElementById("cora-video-source");

// Evento de envio
sendButton.addEventListener("click", enviarMensagem);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") enviarMensagem();
});

// Função principal
function enviarMensagem() {
  const mensagem = userInput.value.trim();
  if (!mensagem) return;

  adicionarMensagem("usuario", mensagem);
  userInput.value = "";

  pensar(() => consultarCora(mensagem));
}

// Adiciona a mensagem na tela
function adicionarMensagem(classe, texto) {
  const msg = document.createElement("div");
  msg.classList.add("mensagem", classe);
  msg.innerText = texto;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Simula "Cora está pensando..."
function pensar(callback) {
  mudarVideo("coraconfusa.mp4");

  const pensando = document.createElement("div");
  pensando.classList.add("mensagem", "cora");
  pensando.innerText = "Cora está pensando...";
  pensando.id = "pensando";
  chatBox.appendChild(pensando);
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    pensando.remove();
    callback();
  }, 1200);
}

// Troca o vídeo de reação
function mudarVideo(nomeArquivo) {
  coraVideoSource.src = "imagens/" + nomeArquivo;
  coraVideo.load();
  coraVideo.play();
}

// Consulta o servidor da IA
async function consultarCora(mensagem) {
  try {
    // Verifica se a pessoa disse o nome
    const nomeDetectado = mensagem.match(/meu nome é (\w+)/i);
    if (nomeDetectado) {
      const nome = nomeDetectado[1];
      localStorage.setItem("nomeUsuario", nome);
      adicionarMensagem("cora", `Aaah agora sim! Pode deixar, ${nome}, vou lembrar com carinho 🥰`);
      mudarVideo("corafeliz.mp4");
      return;
    }

    // Envia mensagem para o servidor
    const resposta = await fetch("https://cora-backend-0czd.onrender.com/cora", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: mensagem }),
    });

    const data = await resposta.json();
    const respostaCora = data.reply || "Hmm... não consegui responder 🥺";

    adicionarMensagem("cora", respostaCora);
    mudarVideo("corafeliz.mp4");

  } catch (err) {
    adicionarMensagem("cora", "Ops... perdi a conexão com o servidor 😢");
    mudarVideo("coratriste.mp4");
    console.error("Erro ao falar com Cora:", err);
  }
}

// Mensagem de boas-vindas com nome salvo
window.onload = () => {
  const nome = localStorage.getItem("nomeUsuario");
  if (nome) {
    adicionarMensagem("cora", `Oieee ${nome}! Que bom te ver por aqui 💕 Como você tá hoje?`);
  } else {
    adicionarMensagem("cora", "Oiêê! 🌸 Que bom que você veio me visitar! Como posso te ajudar hoje?");
  }
};
