import {Router} from "express";
import userController from "../controllers/userController";
const {getAll, create, login} = userController;
const router = Router();

router.get("/", getAll);
router.post("/create", create);
router.post("/login", login);

export default router;
