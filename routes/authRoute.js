import express from 'express'

// router object
const router = express.Router()

// routing
// Register || Method Post
router.post('/register', registerController)

export default router