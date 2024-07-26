import {Express, Request, Response} from "express";
import CreatePurchase from "../../core/purchase/useCases/CreatePurchase";
import Auth from "../AuthMiddleware";

interface AuthRequest extends Request {
  user?: {_id: string; email: string};
}

export default class CreatePurchaseController {
  constructor(readonly server: Express, readonly useCase: CreatePurchase) {
    const authMiddleware = new Auth();
    server.use((req, res, next) => authMiddleware.authenticate(req, res, next));
    server.post("/purchase/create", async (req: AuthRequest, res: Response) => {
      const {description, price, purchasedIn, responsible, status} = req.body;

      await useCase.toExecute({
        userId: req.user?._id,
        description,
        price,
        purchasedIn,
        responsible,
        status,
      });

      res.status(201).json({message: "Cadastrada"});
    });
  }
}
