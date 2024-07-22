import {Express, Request, Response} from "express";
import UpdatePurchase from "../../core/purchase/useCases/UpdatePurchase";
import Auth from "../AuthMiddleware";

interface AuthRequest extends Request {
  user?: {_id: string; email: string};
}

export default class UpdatePurchaseController {
  constructor(readonly server: Express, readonly useCase: UpdatePurchase) {
    const authMiddleware = new Auth();
    server.use((req, res, next) => authMiddleware.authenticate(req, res, next));
    server.put(
      "/purchase/update/:id",
      async (req: AuthRequest, res: Response) => {
        const id = req.params.id;
        const {description, price, purchasedIn, responsable, status} = req.body;

        const purchase = await useCase.toExecute({
          userId: req.user?._id!,
          id,
          description,
          price,
          purchasedIn,
          responsable,
          status,
        });

        console.log("Controller", purchase);

        if (!purchase) {
          res.status(404).json({message: "Não encontrada"});
          return;
        }

        res.status(201).json({message: "Atualizada"});
      }
    );
  }
}
