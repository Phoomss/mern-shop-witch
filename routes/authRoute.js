import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";
import { isAdmin, requireSingIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
// Register || Method Post
router.post("/register", registerController);

// Login || Post
router.post("/login", loginController);

// Forgot Password || Post
router.post("/forgot-password", forgotPasswordController);

// test routes
router.get("/test", requireSingIn, isAdmin, testController);

// protected route auth
router.get("/user-auth",  requireSingIn,(req,res) => {
  res.status(200).send({ok: true})
})
export default router;
