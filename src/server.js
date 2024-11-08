const express = require("express");
require('dotenv').config();
const cors = require("cors");
const bodyParser = require("body-parser");
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.CHATBOT_KEY,
});

// Set up the server 

const app = express();
app.use(bodyParser.json());
app.use(cors())

// Set up OpenAI endpoint

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;
  const completion = await openai.completions.create({
    // model: "text-davinci-003", 
    model: "gpt-3.5-turbo", 
    prompt: prompt,
    max_tokens: 30,
  });
  res.send(completion.data.choices[0].text);
});

// server connection

const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});