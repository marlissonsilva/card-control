import Password from "../../shared/Password";
import UseCase from "../../shared/UseCase";
import RepositoryUser from "./Repository";

type Input = {
    name: string;
    email: string;
    password: string;
};

export default class RegisterUser implements UseCase<Input, boolean> {
    constructor(private readonly repository: RepositoryUser) { }

    async toExecute(dados: Input): Promise<boolean> {
        const { name, email, password } = dados;

        const userExists = await this.repository.getByEmail(email);
        if (!userExists) {
            const encryptedPassword = Password.encrypt(password);
            await this.repository.createUser({
                name,
                email,
                password: encryptedPassword,
            });
            return true;
        }
        return false;
    }
}