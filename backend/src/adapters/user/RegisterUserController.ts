import { Express } from "express";
import RegisterUser from "../../core/user/useCases/RegisterUser";
export default class RegisterUserController {
    constructor(readonly server: Express, readonly useCase: RegisterUser) {
        server.post("/user/create", async (req, res) => {
            const { name, email, password } = req.body as any;

            if (password.length < 6) {
                res.send("Senha muito curta");
            }
            const userCreated = await useCase.toExecute({ name, email, password });
            if (!userCreated) {
                res.send({
                    message:
                        "Problema ao cadastrar, confirme se já é cadastrado ou verifique seus dados",
                });
                return;
            }
            res.status(200).send({ message: "Usuário cadastrado" });
        });
    }
}