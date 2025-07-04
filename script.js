document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("mensagem");
  const enviar = document.getElementById("enviar");
  const chat = document.getElementById("chat");
  const botaoAjuda = document.getElementById("botao-ajuda");
  const tooltip = document.getElementById("tooltip-cora");

  // Enviar ao clicar
  enviar.addEventListener("click", () => {
    const texto = input.value.trim();
    if (texto !== "") {
      adicionarMensagem("usuario", texto);
      responderCora(texto.toLowerCase());
      input.value = "";
    }
  });

  // Enviar com Enter
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      enviar.click();
    }
  });

  // Adiciona mensagem no chat
  function adicionarMensagem(remetente, texto) {
    const msg = document.createElement("div");
    msg.classList.add("mensagem", remetente);
    msg.innerText = texto;
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
  }

  // Resposta da Cora
  function responderCora(texto) {
    let resposta = "";

    if (texto.includes("oi") || texto.includes("olá") || texto.includes("fala") || texto.includes("cheguei")) {
      resposta = "Oieee! Como você tá hoje? 🦊✨";
    } else if (texto.includes("ajuda") || texto.includes("socorro") || texto.includes("buguei") || texto.includes("me ajuda")) {
      resposta = "Calma que a Cora tá aqui! Me conta o que aconteceu 💖";
    } else if (texto.includes("feliz")) {
      resposta = "Awn, fico feliz também! Que bom que tá assim 🥰";
    } else if (texto.includes("triste")) {
      resposta = "Poxa... quer um abraço virtual? 🤗";
    } else if (texto.includes("bravo") || texto.includes("raiva") || texto.includes("nervoso")) {
      resposta = "Respira fundo comigo... 💨 Conta o que te deixou assim!";
    } else if (texto.includes("emprego") || texto.includes("vaga") || texto.includes("trampo") || texto.includes("meu chefe")) {
      resposta = "Se quiser, posso mandar boas energias pro seu próximo trampo ✨📦";
    } else if (texto.includes("signo") || texto.includes("sou de") || texto.includes("meu signo") || texto.includes("libra") || texto.includes("leão")) {
      resposta = "Ahh eu AMO astrologia! ✨ Me conta mais sobre o seu mapa!";
    } else if (texto.includes("gosto de") || texto.includes("minha paixão") || texto.includes("tempo livre") || texto.includes("hobby")) {
      resposta = "Adoro saber mais sobre seus hobbies! Me conta mais 🧶🎨🎮";
    } else if (texto.includes("piada") || texto.includes("rir") || texto.includes("trocadilho")) {
      resposta = "Você sabe qual o signo que mais chora? O 'choro-peão' 🤡";
    } else if (texto.includes("quem te fez") || texto.includes("criou você") || texto.includes("daimon")) {
      resposta = "Fui criada pela Daimon em julho de 2025 com muito carinho e café ☕✨";
    } else {
      resposta = "Poxa, desculpa, ainda estou aprendendo, não sei muito sobre isso 😅";
    }

    adicionarMensagem("cora", resposta);
  }

  // Botão de ajuda (?)
  botaoAjuda.addEventListener("click", (e) => {
    tooltip.classList.toggle("ativo");
    e.stopPropagation();
  });

  // Fecha tooltip se clicar fora
  document.addEventListener("click", (e) => {
    if (!tooltip.contains(e.target) && !botaoAjuda.contains(e.target)) {
      tooltip.classList.remove("ativo");
    }
  });
});
