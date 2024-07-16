import User from "../model/User";

export default interface RepositoryUser {
  getAll(): Promise<User[]>;
  getByEmail(email: string): Promise<User | null>;
  createUser(user: Partial<User>): Promise<User>;
  login(email: string, password: string): Promise<User | null>;
}