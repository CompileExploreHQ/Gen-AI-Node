import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GOOGLE_API_KEY;

const ai = new GoogleGenAI({ apiKey });

async function main() {
    const response = await ai.models.generateContentStream({
        model: "gemini-2.5-flash",
        contents: "Explain how AI works",
    });

    for await (const chunk of response) {
        console.log(chunk.text);
    }
}

await main();