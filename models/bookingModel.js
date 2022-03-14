import mongoose from 'mongoose'

const bookingSchema = mongoose.Schema(
  {
    serviceName: {
      type: String,
    },
    date: {
      type:String
    },
    time: {
      type: String,
    },
    available: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Booking = mongoose.model('Booking', bookingSchema)

export default Booking
