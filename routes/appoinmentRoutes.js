import express from 'express'
const router = express.Router()

import {
  createAppoinment,
  getAppoinmentsByEmail,
} from '../controller/appoinmentController.js'

router.route('/').get(getAppoinmentsByEmail).post(createAppoinment)

export default router
