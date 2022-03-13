import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const createdUser = asyncHandler(async (req, res) => {
    const {email, displayName} = req.body
    const user = new User({
      name: displayName,
      email: email,

    })

    const savedUser = await user.save()
    res.status(201).json(savedUser)
    console.log(savedUser)
})

export { createdUser }
