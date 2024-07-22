import UseCase from "../../shared/UseCase";
import Repository from "./Repository";

type Input = {
  userId: string;
  id: string;
};

export default class DeletePurchase implements UseCase<Input, boolean> {
  constructor(private readonly repository: Repository) {}
  async toExecute(data: Input): Promise<boolean> {
    const {userId, id} = data;
    const purchase = await this.repository.getById(userId, id);
    if (!purchase) {
      return false;
    }
    await this.repository.delete(id);
    return true;
  }
}
