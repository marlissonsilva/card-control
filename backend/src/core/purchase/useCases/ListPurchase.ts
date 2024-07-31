import Purchase from "../model/Purchase";
import UseCase from "../../shared/UseCase";
import Repository from "./Repository";

type Input = {
  userId: string;
  dateStart: string;
  dateEnd: string;
};

export default class ListPurchase implements UseCase<Input, Purchase[]> {
  constructor(private readonly repository: Repository) {}

  async toExecute(input: Input): Promise<Purchase[]> {
    const {userId, dateStart, dateEnd} = input;
    return await this.repository.findByUserId(userId, dateStart, dateEnd);
  }
}
