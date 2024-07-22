import Purchase from "../model/Purchase";
import UseCase from "../../shared/UseCase";
import Repository from "./Repository";

type Input = {
  userId: string;
  id: string;
};

export default class GetByIdPurchase implements UseCase<Input, Purchase> {
  constructor(private readonly repository: Repository) {}

  async toExecute(data: Input): Promise<Purchase> {
    const {userId, id} = data;
    return await this.repository.getById(userId, id);
  }
}
