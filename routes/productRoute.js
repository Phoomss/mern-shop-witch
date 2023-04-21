import express from "express";
import { isAdmin, requireSingIn } from "../middlewares/authMiddleware.js";
import {
  DeleteProductController,
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  getProductController,
  getSingProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
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

// filter product
router.post("/product-filter",productFiltersController)

// product count
router.get('/product-count', productCountController)

// product per page
router.get('/product-list/:page',productListController)

// search product
router.get("/search/:keyword", searchProductController)

// similar product
router.get("/related-product/:pid/:cid", relatedProductController)

// category wise product
router.get("/product-category/:slug", productCategoryController)

// payment routes
// token
router.get('/braintree/token', braintreeTokenController)

// payment
router.post('/braintree/payment', requireSingIn, brainTreePaymentController)
export default router;
