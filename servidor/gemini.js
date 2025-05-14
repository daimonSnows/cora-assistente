import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function respostaGemini(pergunta) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(pergunta);
    const response = await result.response;
    return response.text();
  } catch (err) {
    console.error("Erro com Gemini:", err.message);
    return null; // Retorna null pra permitir fallback
  }
}
