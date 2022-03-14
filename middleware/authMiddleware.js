import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import admin from 'firebase-admin'


const verifyToken = asyncHandler(async (req, res, next) => {
  if(req.headers?.authorization?.startsWith('Bearer')) {
    const token = req.headers.authorization.split(' ')[1]

    try {
      const decodedUser = await admin.auth().verifyIdToken(token)
      
      req.decodedEmail = decodedUser.email
    } catch (error) {
      console.error(error)
    }
  }

  next()
})

export { verifyToken }
