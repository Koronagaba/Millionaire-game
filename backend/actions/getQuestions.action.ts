import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { Level } from "../enums/questions.enums";

const MongoClient = require("mongodb").MongoClient;
dotenv.config();
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.x0qk9pz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const getQuestionsByDifficultyLevel = async (
  level: Level,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const client = new MongoClient(url);
  let questions;
  try {
    await client.connect();
    const db = client.db("millionaire");
    questions = await db.collection("questions").find({ level }).toArray();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Could not retrieve questions", error });
  }
  client.close();

  res.json(questions);
};

const getEasyQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getQuestionsByDifficultyLevel(Level.Easy, req, res, next);
};
const getMediumQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getQuestionsByDifficultyLevel(Level.Medium, req, res, next);
};
const getQuiteDifficultQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getQuestionsByDifficultyLevel(Level.QuiteDifficult, req, res, next);
};
const getDifficultQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getQuestionsByDifficultyLevel(Level.Difficult, req, res, next);
};

export {
  getEasyQuestions,
  getMediumQuestions,
  getQuiteDifficultQuestions,
  getDifficultQuestions,
};
