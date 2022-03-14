import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import appoinmentRoutes from './routes/appoinmentRoutes.js'
import userRoutes from './routes/userRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'
import admin from 'firebase-admin'
import serviceAccount from './doctors-appoinment-admin-sdk.json'

// doctors-appoinment-admin-sdk.json
dotenv.config()
connectDB()

const app = express()


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use(cors())
app.use(express.json())


app.use('/api/appoinments', appoinmentRoutes)
app.use('/api/users', userRoutes)
app.use('/api/bookings', bookingRoutes)

app.get('/', (req, res) => {
  res.send('API is up and running')
})

// 404 routing error handler
app.use(notFound)

// custom error handler
app.use(errorHandler)

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
