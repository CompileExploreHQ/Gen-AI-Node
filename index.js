import OpenAI from "openai";
import dotenv from 'dotenv'

dotenv.config();

const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

const context = [
    {
        role: 'system',
        content: 'Give answers in short'
    }
]

async function generateAnswer(prompt) {
    context.push({
        role: 'user',
        content: prompt
    })

    const response = await client.responses.create({
        model: "gpt-5.2",
        input: context,
    });

    console.log(response.output_text)

    context.push({
        role: 'assistant',
        content: response.output_text
    })
}


process.stdout.write("Ask me anything..")
process.stdin.on('data', async (data) => {
    const prompt = data.toString().trim()

    if (prompt.toLowerCase() === 'exit') {
        process.exit()
    } else {
        await generateAnswer(prompt)
    }
})

// import { encoding_for_model } from "tiktoken";

// const prompt = `What is vibe coding?`
// const model = "gpt-4o-mini"

// const encoder = encoding_for_model(model);
// const tokens = encoder.encode(prompt)

// console.log(tokens);
