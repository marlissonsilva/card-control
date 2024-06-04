import jwt from "jsonwebtoken";
import {Request, Response, NextFunction} from "express";

interface AuthRequest extends Request {
  user?: {_id: string; email: string};
}

export default function auth(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const headerAuth = req.headers["authorization"];
  if (!headerAuth) {
    return res.status(401).send("Cabeçalho de autorização ausente");
  }
  const token = headerAuth.split(" ")[1];
  if (!token) {
    return res.status(401).send("Token ausente");
  }

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET as string,
    (err, decoded) => {
      if (err) {
        return res.status(403).send("Token inválido");
      }
      req.user = decoded as {_id: string; email: string};
      next();
    }
  );
}
