import { NextFunction, Request, Response } from "express";

const MongoClient = require("mongodb").MongoClient;
const url = "";

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
