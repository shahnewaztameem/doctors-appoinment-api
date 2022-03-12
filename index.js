import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import appoinmentRoutes from './routes/appoinmentRoutes.js'

dotenv.config()
connectDB()

const app = express()

app.use(cors())
app.use(express.json())


app.use('/api/appoinments', appoinmentRoutes)

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
