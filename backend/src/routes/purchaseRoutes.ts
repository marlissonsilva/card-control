import {Router} from "express";
import purchaseController from "../controllers/purchaseController";
const {
  getAll,
  create,
  getById,
  update,
  delete: deleteItem,
} = purchaseController;

const router = Router();

router.get("/", getAll);
router.post("/", create);
router.get("/:id", getById);
router.put("/:id", update);
router.delete("/:id", deleteItem);

export default router;
