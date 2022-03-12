import asyncHandler from 'express-async-handler'

const users = asyncHandler(async (req, res) => {
  res.json({ user: 'user' })
})

export { users }
