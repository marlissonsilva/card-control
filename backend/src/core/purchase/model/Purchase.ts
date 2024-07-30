export default interface Purchase {
  id?: string;
  userId: string;
  price: number;
  description: string;
  purchasedIn: Date;
  responsible: string;
  status: boolean;
  createdAt?: Date;
}
