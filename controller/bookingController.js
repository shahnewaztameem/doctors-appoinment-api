import asyncHandler from 'express-async-handler'
import Booking from '../models/bookingModel.js'

// @method:    POST
// @desc:      Add an appoinment
//@route       /api/appoinments
const createBooking = asyncHandler(async (req, res) => {
  const { time, date, available, serviceName } = req.body

  const booking = new Booking({
    time,
    date,
    available,
    serviceName,
  })

  const createdBooking = await booking.save()
  res.status(201).json(createdBooking)
})

const getAllBookings = asyncHandler(async (req, res) => {
  const getDate = req.query.date
  const bookings = await Booking.find({ date: getDate })
  if (bookings) {
    res.json(bookings)
  } else {
    res.json({ message: 'No Data available' })
  }
})

export { createBooking, getAllBookings }
