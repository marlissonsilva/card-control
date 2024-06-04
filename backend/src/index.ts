import "dotenv/config";
import express from "express";
import connectDatabase from "./db/conect";
import userRoutes from "./routes/userRoutes";
import purchaseRoutes from "./routes/purchaseRoutes";
import auth from "./middleware/auth";
import cors from "cors";

const app = express();
const port = 4000;
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

async function startServer() {
  connectDatabase();
  app.use(express.json());
  app.use(cors(corsOptions));
  app.use("/user", userRoutes);
  app.use("/purchase", auth, purchaseRoutes);

  app.listen(port, () => {
    console.log(`Servidor rodando! Acesse em http://localhost:${port}`);
  });
}

startServer().catch((err) => {
  console.log("Erro ao iniciar servidor", err);
});
