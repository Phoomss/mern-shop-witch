import express from "express";
import { isAdmin, requireSingIn } from "./../middlewares/authMiddleware.js";
import {
  createCategoryController,
  updateCategoryController,
  getAllCategoryController,
  singleCategoryController,
  deleteCategoryController
} from "../controllers/categoryController.js";

const router = express.Router();

// routes
// create category
router.post(
  "/create-category",
  requireSingIn,
  isAdmin,
  createCategoryController
);

// update category
router.put(
  "/update-category/:id",
  requireSingIn,
  isAdmin,
  updateCategoryController
);

// getAll category
router.get("/all-category", getAllCategoryController)

// single category
router.get('/single-category/:slug', singleCategoryController)

// delete category
router.delete("/delete-category/:id", requireSingIn, isAdmin, deleteCategoryController)
export default router;
