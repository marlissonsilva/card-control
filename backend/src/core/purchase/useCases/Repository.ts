import Purchase from "../model/Purchase";

export default interface Repository {
    findByUserId(userId: string): Promise<Purchase[]>;
    create(purchase: Partial<Purchase>): Promise<Purchase>;
    getById(id: string): Promise<Purchase>;
    delete(id: string): Promise<boolean>;
}