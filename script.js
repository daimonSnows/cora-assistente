const chatBox = document.getElementById("chat");
const userInput = document.getElementById("mensagem");
const sendButton = document.getElementById("enviar");
const coraVideo = document.getElementById("cora-video");
const coraVideoSource = document.getElementById("cora-video-source");

sendButton.addEventListener("click", enviarMensagem);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") enviarMensagem();
});

function enviarMensagem() {
  const mensagem = userInput.value.trim();
  if (!mensagem) return;

  adicionarMensagem("usuario", mensagem);
  userInput.value = "";

  pensar(() => consultarCora(mensagem));
}

function adicionarMensagem(classe, texto) {
  const msg = document.createElement("div");
  msg.classList.add("mensagem", classe);
  msg.innerText = texto;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

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

function mudarVideo(nomeArquivo) {
  coraVideoSource.src = "imagens/" + nomeArquivo;
  coraVideo.load();
  coraVideo.play();
}

async function consultarCora(mensagem) {
  try {
    const resposta = await fetch("http://localhost:3000/cora", {
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
