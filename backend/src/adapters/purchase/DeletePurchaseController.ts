import {Express, Request, Response} from "express";
import DeletePurchase from "../../core/purchase/useCases/DeletePurchase";
import Auth from "../AuthMiddleware";

interface AuthRequest extends Request {
  user?: {_id: string; email: string};
}

export default class DeletePurchaseController {
  constructor(readonly server: Express, readonly useCase: DeletePurchase) {
    const authMiddleware = new Auth();

    server.use((req: AuthRequest, res, next) =>
      authMiddleware.authenticate(req, res, next)
    );

    server.delete("/purchase/:id", async (req: AuthRequest, res: Response) => {
      const id = req.params.id;
      const userId = (req as any).user._id;

      try {
        const result = await this.useCase.toExecute({userId, id});

        if (!result) {
          res.status(401).json("Não encontrado");
          return;
        }

        res.status(200).json({message: "Compra apagada"});
      } catch (error) {
        res.status(500).json({message: `Erro ao deletar compra,${error}`});
      }
    });
  }
}
