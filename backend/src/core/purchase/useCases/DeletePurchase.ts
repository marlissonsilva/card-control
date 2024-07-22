import UseCase from "../../shared/UseCase";
import Repository from "./Repository";

export default class DeletePurchase implements UseCase<string, boolean> {
  constructor(private readonly repository: Repository) {}
  async toExecute(id: string): Promise<boolean> {
    const purchase = await this.repository.getById(id);
    if (!purchase) {
      return false;
    }
    await this.repository.delete(id);
    return true;
  }
}
