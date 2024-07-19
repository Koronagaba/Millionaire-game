import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

const MongoClient = require("mongodb").MongoClient;
dotenv.config();
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.x0qk9pz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// const insertQuestions = async () => {
//   const client = new MongoClient(url);

//   try {
//     await client.connect();
//     console.log("Connected to MongoDB Atlas");

//     const database = client.db("millionaire");
//     const collection = database.collection("questions");

//     const result = await collection.insertMany(data);
//     console.log(`${result.insertedCount} documents inserted`);
//   } catch (error) {
//     console.error("Error inserting data:", error);
//   } finally {
//     await client.close();
//     console.log("Connection closed");
//   }
// };

const getQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const client = new MongoClient(url);
  let questions;
  try {
    await client.connect();
    const db = client.db("millionaire");
    questions = await db.collection("questions").find().toArray();
  } catch (error) {
    return res.json({ message: "Could not retrieve questions", error });
  }
  client.close();

  res.json(questions);
};


export {
  getQuestions,
  // , insertQuestions
};
