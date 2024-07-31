import Purchase from "../../core/purchase/model/Purchase";
import Repository from "../../core/purchase/useCases/Repository";
import PurchaseModel from "../db/modelMongoose/Purchase";

export default class RepositoryPurchaseMongoose implements Repository {
  async findByResponsible(
    responsible: string,
    dateStart: string,
    dateEnd: string
  ): Promise<Purchase[]> {
    const filteredPurchases = await PurchaseModel.find({
      responsible,
      purchasedIn: {
        $gte: `${dateStart}T00:00:00.000Z`,
        $lte: `${dateEnd}T00:00:00.000Z`,
      },
    }).sort({createdAt: -1});
    return filteredPurchases.map((purchase) =>
      purchase.toObject()
    ) as Purchase[];
  }

  async findByUserId(
    userId: string,
    dateStart: string,
    dateEnd: string
  ): Promise<Purchase[]> {
    const purchases = await PurchaseModel.find({
      userId,
      purchasedIn: {
        $gte: `${dateStart}T00:00:00.000Z`,
        $lte: `${dateEnd}T00:00:00.000Z`,
      },
    }).sort({createdAt: -1});
    return purchases.map((purchase) => purchase.toObject()) as Purchase[];
  }

  async create(purchase: Partial<Purchase>): Promise<Purchase> {
    const newPurchase = new PurchaseModel(purchase);
    await newPurchase.save();
    return newPurchase.toObject() as Purchase;
  }

  async update(purchase: Partial<Purchase>): Promise<Purchase> {
    const findPurchase = await PurchaseModel.findOneAndUpdate(
      {_id: purchase.id, userId: purchase.userId},
      {
        $set: {
          description: purchase.description,
          price: purchase.price,
          purchasedIn: purchase.purchasedIn,
          responsible: purchase.responsible,
          status: purchase.status,
          createdAt: new Date(),
        },
      },
      {new: true}
    );
    return findPurchase?.toObject() as Purchase;
  }

  async getById(userId: string, _id: string): Promise<Purchase> {
    const purchase = await PurchaseModel.findOne({userId, _id});
    return purchase?.toObject() as Purchase;
  }

  async delete(_id: string): Promise<any> {
    return await PurchaseModel.deleteOne({_id});
  }
}
