import Purchase from "../model/Purchase";
import UseCase from "../../shared/UseCase";
import Repository from "./Repository";

type Input = {
  responsible: string;
  dateStart: string;
  dateEnd: string;
};

export default class FilterByResponsible implements UseCase<Input, Purchase[]> {
  constructor(private readonly repository: Repository) {}

  async toExecute(input: Input): Promise<Purchase[]> {
    const {responsible, dateStart, dateEnd} = input;
    return this.repository.findByResponsible(responsible, dateStart, dateEnd);
  }
}
