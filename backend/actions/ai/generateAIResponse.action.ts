import OpenAI from "openai";
import { Request, Response } from "express";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.DEEPSEEK_API_KEY,
});

const generateAIResponse = async (req: Request, res: Response) => {
  const { prompt } = req.body;
  try {
    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-r1:fre",
      messages: [{ role: "user", content: prompt }],
      max_completion_tokens: 250,
    });

    res.json({ message: completion.choices[0].message.content });
  } catch (error: any) {
    console.error("AI ERROR", error);
    res
      .status(500)
      .json({ message: "AI request failed", error: error.message });
  }
};

export { generateAIResponse };
