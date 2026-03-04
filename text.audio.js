import OpenAI from "openai";
import dotenv from 'dotenv'
import { writeFileSync } from "fs"

dotenv.config();

const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

async function main() {

    const response = await client.audio.speech.create({
        model: "gpt-4o-mini-tts",
        input: "How are you?",
        voice: "marin"
    })

    const baseResponse = await response.arrayBuffer();

    writeFileSync("coral.mp3", Buffer.from(baseResponse))
}

await main()