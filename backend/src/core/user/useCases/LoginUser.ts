import Password from "../../shared/Password";
import UseCase from "../../shared/UseCase";
import RepositoryUser from "./Repository";

type Input = {
    email: string;
    password: string;
};

type Output = {
    _id: string | null;
};
export default class LoginUser implements UseCase<Input, Output> {
    constructor(private readonly repository: RepositoryUser) { }
    async toExecute(dados: Input): Promise<Output> {
        const { email, password } = dados;

        const user = await this.repository.getByEmail(email);
        if (!user) {
            return { _id: null };
        }

        const passwordMatch = Password.toCompare(password, user.password);
        if (!passwordMatch) {
            return { _id: null };
        }

        const loginData = await this.repository.login(email, password);
        if (!loginData || !loginData._id) {
            return { _id: null };
        }

        return { _id: loginData._id };
    }
}