import Purchase from "../model/Purchase";

export default interface Repository {
  findByUserId(
    userId: string,
    dateStart: string,
    dateEnd: string
  ): Promise<Purchase[]>;
  create(purchase: Partial<Purchase>): Promise<Purchase>;
  update(purchase: Purchase): Promise<Purchase | null>;
  getById(userId: string, id: string): Promise<Purchase>;
  delete(id: string): Promise<boolean>;
  findByResponsible(
    responsible: string,
    dateStart: string,
    dateEnd: string
  ): Promise<Purchase[]>;
}
