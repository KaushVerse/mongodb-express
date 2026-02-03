import { MongoClient } from "mongodb";
import { env } from "./env.js";

let db;

export async function connectDB() {
  const client = new MongoClient(env.MONGO_URI);
  await client.connect();

  db = client.db(env.DB_NAME);
  console.log("✅ MongoDB Connected");
}

export function getDB() {
  if (!db) throw new Error("DB not initialized");
  return db;
}
