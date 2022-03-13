import asyncHandler from 'express-async-handler'
import Appoinment from '../models/appoinmentModel.js'

// @method:    POST
// @desc:      Add an appoinment
//@route       /api/appoinments
const createAppoinment = asyncHandler(async (req, res) => {
  const { patientName, email, phone, serviceName, time, date } = req.body

  const appoinment = new Appoinment({
    patientName,
    email,
    phone,
    serviceName,
    time,
    date,
  })

  const createdAppoinment = await appoinment.save()
  res.status(201).json(createdAppoinment)
})

// @method:    GET
// @desc:      Add appoinment by email
//@route       /api/appoinments
const getAppoinmentsByEmail = asyncHandler(async (req, res) => {
  const email = req.query.email
  // const date = new Date(req.query.date).toLocaleDateString()
  // console.log(date)
  const appointments = await Appoinment.find({ email: email })
  res.json(appointments)
})

export { createAppoinment, getAppoinmentsByEmail }
