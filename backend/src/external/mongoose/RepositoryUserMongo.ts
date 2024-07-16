import UserModel from "../db/modelMongoose/User";
import User from "../../core/user/model/User";
import RepositoryUser from "../../core/user/useCases/Repository";

export default class RepositoryUserMongoose implements RepositoryUser {
    async getAll(): Promise<User[]> {
        const users = await UserModel.find();
        return users.map((user) => user.toObject()) as User[];
    }

    async getByEmail(email: string): Promise<User | null> {
        const user = await UserModel.findOne({ email });
        return user ? user.toObject() : null;
    }

    async createUser(user: User): Promise<User> {
        const newUser = new UserModel(user);
        await newUser.save();
        return newUser.toObject() as User;
    }

    async login(email: string): Promise<User | null> {
        const user = await UserModel.findOne({ email });
        return user ? (user.toObject() as User) : null;
    }
}