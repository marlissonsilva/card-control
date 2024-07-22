export default interface Purchase {
  id?: string;
  userId: string;
  price: number;
  description: string;
  purchasedIn: Date;
  responsable: string;
  status: boolean;
}
