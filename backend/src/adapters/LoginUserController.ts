import { Express } from "express";
import LoginUser from "../core/user/useCases/LoginUser";
import jwt from "jsonwebtoken";

export default class LoginUserController {
    constructor(readonly server: Express, readonly useCase: LoginUser) {
        server.post("/user/login", async (req, res) => {
            const { email, password } = req.body as any;

            const { _id } = await useCase.toExecute({ email, password });
            if (!_id) {
                res
                    .status(401)
                    .send({ message: "Erro ao autenticar, verifique seu email e senha" });
                return;
            }

            const token = jwt.sign(
                { _id, email },
                process.env.ACCESS_TOKEN_SECRET as "Secret",
                { expiresIn: "1h" }
            );
            res.status(200).json(token);
        });
    }
}