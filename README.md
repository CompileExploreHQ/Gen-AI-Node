# Gen-AI-Node

A Node.js project that demonstrates various OpenAI API integrations including chat, audio transcription, text-to-speech, and image generation.

## Features

### 1. **Interactive Chat Bot** (`index.js`)
- Real-time conversational AI with chat history
- Uses GPT model for intelligent responses
- System prompt configured to provide concise answers
- Interactive command-line interface
- Type `exit` to quit

**Usage:**
```bash
node index.js
```

### 2. **Audio to Text Transcription** (`audio.to.text.js`)
- Transcribes audio files using OpenAI's Whisper API
- Converts speech to text in English
- Input: `harvard.wav`
- Output: `audioToText.txt`

**Usage:**
```bash
node audio.to.text.js
```

### 3. **Text to Speech** (`text.audio.js`)
- Converts text to speech using OpenAI's TTS API
- Generates MP3 audio files
- Customizable voice options

**Usage:**
```bash
node text.audio.js
```

### 4. **Image Generation** (`generate.image.js`)
- Generates images from text prompts
- Uses OpenAI's image generation model
- Outputs base64-encoded PNG images
- Customizable image size and prompt

**Usage:**
```bash
node generate.image.js
```

## Prerequisites

- Node.js (v12 or higher)
- OpenAI API key

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory:
   ```
   OPENAI_KEY=your_api_key_here
   ```

## Dependencies

- **openai** - Official OpenAI SDK
- **dotenv** - Environment variable management
- **tiktoken** - Token counting for models

## Notes

- Audio files should be placed in the root directory for `audio.to.text.js`
- Generated files are saved to the root directory
- API keys are managed through `.env` file (not tracked in git)