import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GOOGLE_API_KEY;

const ai = new GoogleGenAI({ apiKey });

async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Explain how AI works",
        config: {
            temperature: 2,
            systemInstruction: "Explain in few words.",
            thinkingConfig: {
                includeThoughts: true,
                thinkingBudget: 100,
            },
        }
    });
    console.log(response.candidates[0].content);
}

await main();