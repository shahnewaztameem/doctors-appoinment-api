import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const createdUser = asyncHandler(async (req, res) => {
  const { email, displayName } = req.body
  const user = new User({
    displayName,
    email,
  })

  const savedUser = await user.save()
  res.status(201).json(savedUser)
  console.log(savedUser)
})

const upsertUser = asyncHandler(async (req, res) => {
  const user = req.body
  const filter = { email: user.email }

  console.log(user)

  const result = await User.findOneAndUpdate(filter, user, {
    new: true,
    upsert: true,
    rawResult: true, // Return the raw result from the MongoDB driver
  })

  res.json(result)
})

const makeAdmin = asyncHandler(async (req, res) => {
  const user = req.body
  const requester = req.decodedEmail
  // console.log("make admin",req.decodedEmail)
  if (requester) {
    const userAccount = await User.findOne({ email: requester })
    // console.log(userAccount)
    if (userAccount.isAdmin) {
      
      const filter = { email: user.email }
      const update = { isAdmin: true }

      const result = await User.findOneAndUpdate(filter, update)
      res.json(result)
    }
  } else {
    res.status(403).json({message: 'You dont have the permission'})
  }

  
})

const getUser = asyncHandler(async (req, res) => {
  const email = req.params.email

  const user = await User.findOne({ email: email })

  if (user) {
    res.json({ admin: user?.isAdmin })
  } else {
    res.json('User not found')
  }
})

export { createdUser, upsertUser, makeAdmin, getUser }
