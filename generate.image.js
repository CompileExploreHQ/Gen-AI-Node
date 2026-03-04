import OpenAI from "openai";
import dotenv from 'dotenv'
import { writeFileSync } from "fs"

dotenv.config();

const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

async function main() {

    const response = await client.images.generate({
        model: "gpt-image-1",
        prompt: "Generate a car",
        size: '256x256',
        response_format: "b64_json",
        n: 1
    })

    const rawImage = response.data[0].b64_json;
    const path = "./image.png";
    const buffer = Buffer.from(rawImage, 'base64')

    writeFileSync(path, buffer)
}

await main()