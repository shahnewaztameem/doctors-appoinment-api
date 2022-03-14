import express from 'express'
const router = express.Router()

import {
  createBooking,
  getAllBookings,
} from '../controller/bookingController.js'

router.route('/').post(createBooking).get(getAllBookings)

export default router
