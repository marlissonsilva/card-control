import "dotenv/config";
import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Conectando ao banco...");

  const mongoUrl = process.env.MONGO_URL;
  if (!mongoUrl) {
    throw new Error("The MONGO_URL environment variable is not set");
  }

  mongoose
    .connect(mongoUrl)
    .then(() => console.log("Conectado!"))
    .catch((error) => console.log("Erro ao conectar:", error));
};

export default connectDatabase;
