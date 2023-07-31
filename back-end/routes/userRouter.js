const express = require('express')
const router = express.Router()

const {
    login,
    logout,
    register,
    user,
    profile,
} = require('../controller/userController')

router
  .route('/user')
  .post(login)
  .post(logout)
  .post(register)
  .get(user)
  .get(profile)

router
  .route('/user/:id')

module.exports = router