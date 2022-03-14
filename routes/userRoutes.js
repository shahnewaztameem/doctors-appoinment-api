import express from 'express'
const router = express.Router()

import {
  createdUser,
  upsertUser,
  makeAdmin,
  getUser,
} from '../controller/userController.js'

import { verifyToken } from '../middleware/authMiddleware.js'

router.route('/').post(createdUser).put(upsertUser)
router.route('/:email').get(getUser)

router.route('/admin').put(verifyToken, makeAdmin)

export default router
