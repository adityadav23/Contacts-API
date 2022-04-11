// const bcrypt = require('bcryptjs')
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

const register = async (req,res)=>{

    // upload to db
    const user = await User.create({...req.body})
    //generating token
    const token = user.createJWT()

    res.status(201).json({user:{name:user.name}, token})


}
const login = async (req, res) => {
    const { email, password } = req.body
  //validating email and password provided
    if (!email || !password) {
      throw new Error('Please provide email and password')
    }
    //find user in db
    const user = await User.findOne({ email })
    //if user doesn't exist
    if (!user) {
      throw new Error('Invalid Credentials')
    }
    //check if password is correct
    const isPasswordCorrect = await user.comparePassword(password)
    //if password incorrect
    if (!isPasswordCorrect) {
      throw new Error('Invalid Credentials')
    }
    //create jwt token using instance method after successful authentication
    const token = user.createJWT()
    res.status(200).json({ user: { name: user.name }, token })
  }

module.exports = {register,login}