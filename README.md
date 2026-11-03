# Gemini AI Chatbot

A web chatbot powered by the Google Gemini API. You can chat with it in text, or send it a document, image or audio file.

## Features

- Text chat with Gemini through a simple browser interface
- File upload with a type selector for documents, images and audio
- Node.js server that keeps the API key off the browser and talks to the Gemini API

## Tech

- HTML, CSS and JavaScript for the chat interface
- Node.js server (`gemini.js`) that exposes the endpoints and calls the Gemini API
- Google Gemini API

## Getting started

You need [Node.js](https://nodejs.org) and a Gemini API key from [Google AI Studio](https://aistudio.google.com).

```bash
git clone https://github.com/amirafuad/hacktive.git
cd hacktive
npm install
```

Create a file named `.env` in the project folder and add your key:

```
GEMINI_API_KEY=your_api_key_here
```

Start the server:

```bash
node gemini.js
```

Then open the local address shown in the terminal in your browser.

## Keep your API key private

The `.env` file is listed in `.gitignore` and must never be committed. If a key is ever exposed, delete it in Google Cloud Console and create a new one.

## Notes

This project runs locally because it needs a server and a private API key, so there is no public demo.
