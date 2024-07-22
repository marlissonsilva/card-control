import {Express, Request, Response} from "express";
import ListPurchase from "../../core/purchase/useCases/ListPurchase";
import Auth from "../AuthMiddleware";

interface AuthRequest extends Request {
  user?: {_id: string; email: string};
}

export default class ListPurchaseController {
  constructor(readonly server: Express, readonly useCase: ListPurchase) {
    const authMiddleware = new Auth();

    server.use((req: AuthRequest, res, next) =>
      authMiddleware.authenticate(req, res, next)
    );
    server.get("/purchase/list", async (req: AuthRequest, res: Response) => {
      try {
        const userId = (req as any).user._id;
        if (!userId) {
          return res.status(401).send({message: "Token inválido"});
        }
        const result = await this.useCase.toExecute(userId);
        res.send(result);
      } catch (err) {
        res.status(401).send({message: `Erro ao consultar links: ${err}`});
      }
    });
  }
}
