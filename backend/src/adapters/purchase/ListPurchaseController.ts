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
      const userId = (req as any).user._id;
      const dateStart = String(req.query.dateStart);
      const dateEnd = String(req.query.dateEnd);
      try {
        const result = await this.useCase.toExecute({
          userId,
          dateStart,
          dateEnd,
        });
        res.status(200).json(result);
      } catch (err) {
        res.status(401).json({message: `Erro ao consultar: ${err}`});
      }
    });
  }
}
