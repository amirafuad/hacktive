require('dotenv').config();

console.log("Gemini API Key from .env:", process.env.GEMINI_API_KEY || "❌ Not found");
