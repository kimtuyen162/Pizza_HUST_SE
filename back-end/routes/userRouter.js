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
  .route('/login')
  .post(login)
router
  .route('/logout')
  .post(logout)
router
  .route('/register')
  .post(register)
router
  .route('/:id')
  .get(user)
router
  .route('/profile')
  .get(profile)

module.exports = router