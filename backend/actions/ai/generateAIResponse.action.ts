import OpenAI from "openai";
import { Request, Response } from "express";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.DEEPSEEK_API_KEY,
});

const generateAIResponse = async (req: Request, res: Response) => {  
  const { prompt } = req.body;

  const completion = await openai.chat.completions.create({
    model: "deepseek/deepseek-r1:fre",
    messages: [{ role: "user", content: prompt }],
  });
  console.log(completion.choices[0].message.content);

  res.json({ message: completion.choices[0].message.content });
};

export { generateAIResponse };
