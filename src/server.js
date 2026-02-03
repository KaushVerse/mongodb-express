import express from "express";
import { connectDB, getDB } from "./config/db.js";
import { env } from "./config/env.js";

const app = express();

// connect db first
await connectDB();

app.use(express.json());

// root test route
app.get("/", (req, res) => {
  res.send("API running");
});

// create user
app.post("/create", async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection("users").insertOne(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// get users
app.get("/users", async (req, res) => {
  try {
    const db = getDB();
    const users = await db.collection("users").find().toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// listen on port
app.listen(env.PORT, () => {
  console.log(`🚀 Server running on port ${env.PORT}`);
});
