import {Express, Request, Response} from "express";
import ListPurchase from "../../core/purchase/useCases/ListPurchase";
import Auth from "../AuthMiddleware";
import GetByIdPurchase from "../../core/purchase/useCases/GetByIdPurchase";

interface AuthRequest extends Request {
  user?: {_id: string; email: string};
}

export default class GetByIdPurchaseController {
  constructor(readonly server: Express, readonly useCase: GetByIdPurchase) {
    const authMiddleware = new Auth();

    server.use((req: AuthRequest, res, next) =>
      authMiddleware.authenticate(req, res, next)
    );
    server.get("/purchase/:id", async (req: AuthRequest, res: Response) => {
      try {
        const userId = (req as any).user._id;
        const id = req.params.id;
        if (!userId) {
          return res.status(401).json({message: "Token inválido"});
        }

        const result = await this.useCase.toExecute({userId, id});

        res.status(200).json(result);
      } catch (err) {
        res.status(401).json({message: `Erro ao consultar links: ${err}`});
      }
    });
  }
}
