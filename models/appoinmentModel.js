import mongoose from 'mongoose'

const appoinmentSchema = mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    serviceName: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Appoinment = mongoose.model('Appoinment', appoinmentSchema)

export default Appoinment
