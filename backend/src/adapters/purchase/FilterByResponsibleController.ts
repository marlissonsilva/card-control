import {Express, Request, Response} from "express";
import FilterByResponsible from "../../core/purchase/useCases/FilterByResponsible";
import Auth from "../AuthMiddleware";

interface AuthRequest extends Request {
  user?: {_id: string; email: string};
}

export default class FilterByResponsibleController {
  constructor(readonly server: Express, readonly useCase: FilterByResponsible) {
    const authMiddleware = new Auth();
    server.use((req: AuthRequest, res, next) =>
      authMiddleware.authenticate(req, res, next)
    );
    server.get(
      "/purchase/filter/:responsible",
      async (req: AuthRequest, res: Response) => {
        const responsible = req.params.responsible;
        const dateStart = String(req.query.dateStart);
        const dateEnd = String(req.query.dateEnd);
        console.log(dateStart, dateEnd);

        try {
          const filter = await this.useCase.toExecute({
            responsible,
            dateStart,
            dateEnd,
          });
          res.status(200).json(filter);
        } catch (error) {
          res.status(401).json({
            message: "Erro ao filtrar pelo responsável da compra",
          });
        }
      }
    );
  }
}
