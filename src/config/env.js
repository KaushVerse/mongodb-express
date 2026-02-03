import dotenv from "dotenv";

// dotenv sirf local dev ke liye
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const isDocker = process.env.IS_DOCKER === "true";

export const env = {
  PORT: process.env.PORT || 5000,
  DB_NAME: process.env.DB_NAME || "demo_db",
  MONGO_URI: isDocker
    ? "mongodb://admin:qwerty@mongo:27017/?authSource=admin"
    : "mongodb://admin:qwerty@localhost:27017/?authSource=admin",
};
