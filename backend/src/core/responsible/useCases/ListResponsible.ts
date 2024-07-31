import Responsible from "../model/Responsible";
import UseCase from "../../shared/UseCase";
import Repository from "./Repository";

export default class ListResponsible implements UseCase<string, Responsible[]> {
  constructor(private readonly repository: Repository) {}

  async toExecute(userId: string): Promise<Responsible[]> {
    return await this.repository.list(userId);
  }
}
