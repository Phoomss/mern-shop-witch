import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSingIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
// Register || Method Post
router.post("/register", registerController);

// Login || Post
router.post("/login", loginController);

// test routes
router.get("/test", requireSingIn, isAdmin, testController);

export default router;