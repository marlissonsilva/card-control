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
    server.put("/purchase/:id", async (req: AuthRequest, res: Response) => {
      const id = req.params.id;
      const {description, price, purchasedIn, responsible, status} = req.body;
      
      try {
        const purchase = await useCase.toExecute({
          userId: req.user?._id!,
          id,
          description,
          price,
          purchasedIn,
          responsible,
          status,
        });

        if (!purchase) {
          res.status(404).json({message: "Não encontrada"});
          return;
        }

        res.status(201).json({message: "Atualizada"});
      } catch (error) {
        res.status(500).json({message: `Erro interno do servidor ${error}`});
      }
    });
  }
}
