import express from 'express'
const router = express.Router()

import { createdUser } from '../controller/userController.js'

router.route('/').post(createdUser).put()

export default router
