import { Router } from "express";
import { productModel } from "../models/products.js";

const router = Router();

router.get("/", async (req, res) => {
  const productos = productModel.find();
  return res.render("home", { productos, style: "style.css" });
});

router.get("/realTimeProducts", (req, res) => {
  return res.render("realtimeProducts");
});

export default router;
