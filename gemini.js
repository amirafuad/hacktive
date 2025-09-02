// Load environment variables
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Get API key from .env
const apiKey = process.env.GEMINI_API_KEY;

// Initialize Gemini
const genAI = new GoogleGenerativeAI(apiKey);

async function run() {
  // Pick a model (gemini-pro is for text)
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  // Send a prompt
  const prompt = "Write a short poem about coding on Windows";

  const result = await model.generateContent(prompt);
  console.log("Gemini says:\n", result.response.text());
}

run().catch(console.error);
