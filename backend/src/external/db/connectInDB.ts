import "dotenv/config";
import mongoose from "mongoose";

export default class ConnectDatabase {
    private mongoUrl: string;

    constructor() {
        this.mongoUrl = process.env.DATABASE_URL as string;
        if (!this.mongoUrl) {
            throw new Error("The DATABASE_URL environment variable is not set");
        }
    }

    connect() {
        console.log("Conectando ao banco...");

        mongoose
            .connect(this.mongoUrl)
            .then(() => console.log("Conectado!"))
            .catch((error) => console.log("Erro ao conectar:", error));
    }
}