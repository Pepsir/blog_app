const User = require('../models/User')

// login user
const loginUser = async (req, res) => {
    res.json({mssg: 'Login User'})
}

// signup user
const signupUser = async (req, res) => {
    res.json({mssg: 'Signup User'})
}


module.exports = {
    loginUser,
    signupUser
}