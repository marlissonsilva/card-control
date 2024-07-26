import UseCase from "../../shared/UseCase";
import Purchase from "../model/Purchase";
import Repository from "./Repository";

type Input = {
  userId: string;
  description: string;
  price: number;
  purchasedIn: Date;
  responsible: string;
  status: boolean;
  id: string;
};

export default class UpdatePurchase implements UseCase<Input, Purchase | null> {
  constructor(private readonly repository: Repository) {}

  async toExecute(input: Input): Promise<Purchase | null> {
    const {id, userId, description, price, purchasedIn, responsible, status} =
      input;
    const purchase = await this.repository.getById(userId, id!);
    if (!purchase) {
      return null;
    }
    return await this.repository.update({
      id,
      userId,
      description,
      price,
      purchasedIn,
      responsible,
      status,
    });
  }
}
