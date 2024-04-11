import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getProductsById,
  getProducts,
  updateProduct,
} from "../controllers/products.js";

const router = Router();

router.get("/", getProducts);
router.get("/:pid", getProductsById);
router.post("/", addProduct);
router.put("/:pid", updateProduct);
router.delete("/:pid", deleteProduct);

export default router;
