import express from 'express'
import {registerController} from '../controllers/authController.js'
import { loginController } from '../controllers/authController.js'
// router object
const router = express.Router()

// routing
// Register || Method Post
router.post('/register', registerController)

// Login || Post
router.post('/login', loginController)

export default router