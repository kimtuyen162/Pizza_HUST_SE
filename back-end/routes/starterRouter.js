const express = require('express')
const router = express.Router()

const {
  createStarter,
  getStarter,
  getAllStarters,
  deleteStarter,
  updateStarter
} = require('../controller/starterController')

router
  .route('/starter')
  .get(getAllStarters)
  .post(createStarter)

router
  .route('/starter/:id')
  .get(getStarter)
  .delete(deleteStarter)
  .patch(updateStarter)

module.exports = router