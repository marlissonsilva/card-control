import UseCase from "../../shared/UseCase";
import Repository from "./Repository";

type Input = {
  userId: string | undefined;
  description: string;
  price: number;
  purchasedIn: Date;
  responsible: string;
  status: boolean;
};
export default class CreatePurchase implements UseCase<Input, void> {
  constructor(private readonly repository: Repository) {}

  async toExecute(input: Input): Promise<void> {
    const {userId, description, price, purchasedIn, responsible, status} =
      input;
    await this.repository.create({
      userId,
      description,
      price,
      purchasedIn,
      responsible,
      status,
    });
  }
}
