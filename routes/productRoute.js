import express from "express";
import { isAdmin, requireSingIn } from "../middlewares/authMiddleware.js";
import {
  DeleteProductController,
  createProductController,
  getProductController,
  getSingProductController,
  productPhotoController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

// routes
router.post(
  "/create-product",
  requireSingIn,
  isAdmin,
  formidable(),
  createProductController
);

// update
router.put(
  "/update-product/:pid",
  requireSingIn,
  isAdmin,
  formidable(),
  updateProductController
);

// get products
router.get("/get-products", getProductController);

// single product
router.get("/get-products/:slug", getSingProductController);

// get photo
router.get("/product-photo/:pid", productPhotoController)

// delete product
router.delete("/delete-product/:pid", DeleteProductController)
export default router;