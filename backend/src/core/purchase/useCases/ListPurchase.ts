import Purchase from "../model/Purchase";
import UseCase from "../../shared/UseCase";
import Repository from "./Repository";

export default class ListPurchase implements UseCase<string, Purchase[]> {
  constructor(private readonly repository: Repository) {}

  async toExecute(userId: string): Promise<Purchase[]> {
    return await this.repository.findByUserId(userId);
  }
}
