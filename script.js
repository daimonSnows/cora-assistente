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
  const texto = userInput.value.trim();
  if (!texto) return;

  adicionarMensagem("usuario", texto);
  userInput.value = "";

  pensar(() => consultarCora(texto));
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
    const resposta = await fetch("https://cora-backend-0czd.onrender.com/cora", {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: mensagem }),
    });

    const data = await resposta.json();
    let respostaCora = data.reply || "Hmm... não consegui responder 🥺";

    // 💡 Verifica se é uma saudação e trata o nome
    if (
      mensagem.includes("oi") ||
      mensagem.includes("olá") ||
      mensagem.includes("e aí")
    ) {
      const nomeSalvo = localStorage.getItem("nomeUsuario");

      if (!nomeSalvo) {
        const nome = prompt("Antes da gente começar... qual é o seu nome? 🥰");
        if (nome) {
          localStorage.setItem("nomeUsuario", nome);
          respostaCora = `Aaahh agora sim! 💖 Muito prazer, ${nome}! Pode me chamar de Cora, sua amiga digital. Como posso te ajudar hoje?`;
        } else {
          respostaCora = "Hihi, tudo bem se não quiser dizer agora 💗 Tô aqui do mesmo jeitinho!";
        }
      } else {
        respostaCora = `Oieee ${nomeSalvo}! Que bom te ver por aqui de novo 💕 Me conta, como você tá hoje?`;
      }
    }

    adicionarMensagem("cora", respostaCora);
    mudarVideo("corafeliz.mp4");

  } catch (err) {
    adicionarMensagem("cora", "Ops... perdi a conexão com o servidor 😢");
    mudarVideo("coratriste.mp4");
    console.error("Erro ao falar com Cora:", err);
  }
}
