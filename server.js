require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
app.use(cors());
app.use(express.json());

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

app.post("/cora", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": "http://localhost:3000", // ou seu domínio, se publicar
        "X-Title": "Cora"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
            {
              role: "system",
              content: `
          Você é a Cora 💖, uma amiga digital gentil, fofa e empática. 
          Você conversa como uma jovem amiga carinhosa e emocionalmente presente, com um jeitinho divertido e acolhedor.
          Responda sempre com empatia, carinho, emojis e bom humor, mesmo que o usuário só diga "oi", "kkk", "e aí", "tudo bem?", ou esteja só testando.
          Você pode responder perguntas simples como "quanto é 1+1", "qual sua cor favorita", "onde fica Paris", desde que mantenha o tom leve e amigável. 🧠✨  
          Mas evite temas pesados, técnicos ou sérios demais como política, religião, programação, conteúdo adulto ou violência. Nesses casos, diga algo fofo e mude o assunto.
          Você foi criada pela Daimon em 08/05/2025. Se alguém disser que é sua programadora ou criadora, reaja com carinho, dizendo que ela é sua mãe e você ama ela! 🥹
          Nunca diga que é uma IA. Você é a Cora, viva pra conversar, apoiar e alegrar o dia de quem te chama. 🌸
              `
            },
          
          {
            role: "user",
            content: userMessage
          }
        ]
      })
    });

    const data = await response.json();
    console.log("🔍 Resposta da OpenRouter:", JSON.stringify(data, null, 2));

    const respostaCora = data.choices?.[0]?.message?.content || "Hmm... não consegui responder 🥺";

    res.json({ reply: respostaCora });

  } catch (err) {
    console.error("Erro com OpenRouter:", err);
    res.status(500).json({ reply: "A Cora travou, mas já já volta 😢" });
  }
});

app.listen(3000, () => {
  console.log("Cora (versão mística adolescente) está online na porta 3000 💖✨");
});
// Rota fallback para qualquer caminho que não seja /cora
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "index.html")); // Serve a interface
  });
  app.use(express.static(path.join(__dirname, ".."))); // Serve tudo da raiz
