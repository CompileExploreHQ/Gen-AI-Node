import OpenAI from "openai";
import dotenv from 'dotenv'
import { createReadStream, writeFileSync } from "fs"

dotenv.config();

const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

async function main() {

    const response = await client.audio.transcriptions.create({
        model: "whisper-1",
        file: createReadStream('harvard.wav'),
        language: 'en'
    })

    const rawText = response.text;

    writeFileSync("audioToText.txt", rawText, 'utf-8')
}

await main()