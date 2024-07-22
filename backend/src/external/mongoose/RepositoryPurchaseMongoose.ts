import Purchase from "../../core/purchase/model/Purchase";
import Repository from "../../core/purchase/useCases/Repository";
import PurchaseModel from "../db/modelMongoose/Purchase";

export default class RepositoryPurchaseMongoose implements Repository {
  async findByUserId(userId: string): Promise<Purchase[]> {
    const purchases = await PurchaseModel.find({
      userId,
    });
    return purchases.map((purchase) => purchase.toObject()) as Purchase[];
  }

  async create(purchase: Partial<Purchase>): Promise<Purchase> {
    const newPurchase = new PurchaseModel(purchase);
    await newPurchase.save();
    return newPurchase.toObject() as Purchase;
  }

  async update(purchase: Partial<Purchase>): Promise<Purchase> {
    console.log("Mongoose Update", purchase);
    const findPurchase = await PurchaseModel.findOneAndUpdate(
      {_id: purchase.id, userId: purchase.userId},
      {
        $set: {
          description: purchase.description,
          price: purchase.price,
          purchasedIn: purchase.purchasedIn,
          responsable: purchase.responsable,
          status: purchase.status,
        },
      },
      {new: true}
    );
    console.log(findPurchase);
    return findPurchase?.toObject() as Purchase;
  }

  async getById(_id: string): Promise<Purchase> {
    const purchase = await PurchaseModel.findById({_id});
    return purchase?.toObject() as Purchase;
  }

  async delete(_id: string): Promise<any> {
    return await PurchaseModel.deleteOne({_id});
  }
}
