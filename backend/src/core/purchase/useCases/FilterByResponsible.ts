import Purchase from "../model/Purchase";
import UseCase from "../../shared/UseCase";
import Repository from "./Repository";

export default class FilterByResponsible implements UseCase<string, Purchase[]> {
  constructor(private readonly repository: Repository) {}

  async toExecute(responsible: string): Promise<Purchase[]> {
    return this.repository.findByResponsible(responsible);
  }
}
