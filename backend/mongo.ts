import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

const MongoClient = require("mongodb").MongoClient;
dotenv.config();
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.x0qk9pz.mongodb.net/products_test?retryWrites=true&w=majority&appName=Cluster0`;

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  const client = new MongoClient(url);
  let products;
  try {
    await client.connect();
    const db = client.db();
    products = await db.collection("products").find().toArray();
  } catch (error) {
    return res.json({ message: "Could not retrieve questions", error });
  }
  client.close();

  res.json(products);
};

export { getProducts };
