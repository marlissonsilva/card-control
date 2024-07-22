export default interface Purchase {
  userId: string;
  price: number;
  description: string;
  purchasedIn: Date;
  responsable: string;
  status: boolean;
}
