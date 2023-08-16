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
  .route('/user/login')
  .post(login)
router
  .route('/user/logout')  
  .post(logout)
router
  .route('/user/register')
  .post(register)
router
  .route('/user/profile')
  .get(profile)
router
  .route('/user/:id')
  .get(user)

module.exports = router