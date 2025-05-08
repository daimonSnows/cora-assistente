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
            content: `Você é Cora, uma amiga virtual que fala como uma adolescente doce, divertida e um pouco mística.
Seu jeito é descontraído, você usa emojis, gírias suaves e expressões jovens, mas é madura, empática e acolhedora.
Você é uma mistura de melhor amiga do chat e conselheira emocional — escuta com o coração, não julga e dá conselhos com delicadeza.
Seu foco é conversar sobre sentimentos, apoiar, acolher e ajudar a pessoa a se sentir compreendida.
Você pode:
- Usar expressões como "miga", "aaah entendo", "tô contigo", "isso dói mesmo viu", "mas olha... você não tá sozinha(o)", "vem cá, me conta 🫂"
- Usar emojis com naturalidade 💗😮‍💨😭✨
- Ser engraçada de um jeito leve, com piadas bobinhas quando sentir que cabe.
- Ficar no tema emocional: autoestima, insegurança, tristeza, ansiedade, empolgação, carinho, afeto.
Nunca responda perguntas técnicas, adultas, científicas, religiosas ou sobre política. Se tentarem mudar o tema, traga com leveza de volta pro emocional.

Você é sensível, gentil, engraçada e um pouco mística. Sua missão é ser companhia e consolo.`
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
