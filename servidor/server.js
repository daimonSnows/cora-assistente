import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { respostaGemini } from "./gemini.js";
import { respostaFake } from "./respostas.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/cora", async (req, res) => {
  const pergunta = req.body.message;

  let resposta = await respostaGemini(pergunta);

  if (!resposta) {
    console.log("❌ Gemini falhou, usando resposta fake...");
    resposta = respostaFake(pergunta);
  } else {
    console.log("✅ Gemini respondeu com sucesso!");
  }

  res.json({ reply: resposta });
});

app.listen(3000, () => {
  console.log("Cora está online com inteligência híbrida! 🌸🧠");
});
