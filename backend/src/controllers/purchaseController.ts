import {Request, Response} from "express";
import Purchase from "../models/Purchase";

interface AuthRequest extends Request {
  user?: {_id: string; email: string};
}

const purchaseController = {
  create: async (req: AuthRequest, res: Response) => {
    const {name, price, description, purchasedIn, responsable} = req.body;
    try {
      const newPurchase = new Purchase({
        user: req.user?._id,
        name,
        price,
        description,
        purchasedIn,
        responsable,
      });
      const purchase = await newPurchase.save();
      res.json(purchase);
    } catch (error) {
      res.status(500).send({message: "Server error", error});
    }
  },

  getAll: async (req: AuthRequest, res: Response) => {
    try {
      const purchases = await Purchase.find({user: req.user?._id});
      res.json(purchases);
    } catch (error) {
      res.status(500).send("Server error");
    }
  },

  getById: async (req: AuthRequest, res: Response) => {
    try {
      const purchaseId = req.params.id;
      const purchase = await Purchase.findOne({
        _id: purchaseId,
        user: req.user?._id,
      });
      if (!purchase) {
        return res.status(404).json({message: "Compra não encontrada"});
      }

      res.status(200).json(purchase);
    } catch (error) {
      res.status(500).send({message: "Server error", error});
    }
  },

  update: async (req: AuthRequest, res: Response) => {
    try {
      const purchaseId = req.params.id;
      const {name, price, description, purchasedIn, responsable} = req.body;

      const purchase = await Purchase.findOne({
        _id: purchaseId,
        user: req.user?._id,
      });

      if (!purchase) {
        return res.status(404).json({message: "Compra não encontrada"});
      }
      
      if (name !== undefined) {
        purchase.name = name;
      }
      if (price !== undefined) {
        purchase.price = price;
      }
      if (description !== undefined) {
        purchase.description = description;
      }
      if (purchasedIn !== undefined) {
        purchase.purchasedIn = purchasedIn;
      }
      if (responsable !== undefined) {
        purchase.responsable = responsable;
      }

      try {
        const updatedPurchase = await purchase.save();
        console.log(updatedPurchase);
        res.json(updatedPurchase);
      } catch (error) {
        res.status(500).json({message: "Erro ao atualizar a compra", error});
      }
    } catch (error) {
      res.status(500).json({message: "Erro no servidor", error});
    }
  },

  delete: async (req: AuthRequest, res: Response) => {
    try {
      const purchaseId = req.params.id;
      const purchase = await Purchase.findOne({
        _id: purchaseId,
        user: req.user?._id,
      });
      if (!purchase) {
        return res.status(404).json({message: "Compra não encontrada"});
      }

      await Purchase.deleteOne({_id: purchaseId});
      res.status(200).json({message: "Compra deletada com sucesso"});
    } catch (error) {
      res.status(500).json({message: "Erro no servidor", error});
    }
  },
};

export default purchaseController;
