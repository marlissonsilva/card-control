import {Express, Request, Response} from "express";
import ListResponsible from "../../core/responsible/useCases/ListResponsible";
import Auth from "../AuthMiddleware";

interface AuthRequest extends Request {
  user?: {_id: string; email: string};
}

export default class ListResponsibleController {
  constructor(readonly server: Express, readonly useCase: ListResponsible) {
    const authMiddleware = new Auth();

    server.use((req: AuthRequest, res, next) =>
      authMiddleware.authenticate(req, res, next)
    );

    server.get("/responsible/list", async (req: AuthRequest, res: Response) => {
      const userId = (req as any).user._id;
      try {
        const result = await this.useCase.toExecute(userId);
        res.status(200).json(result);
      } catch (err) {
        res.status(401).json({message: `Erro ao consultar: ${err}`});
      }
    });
  }
}
