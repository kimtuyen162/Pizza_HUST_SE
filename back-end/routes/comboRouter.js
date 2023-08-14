const express = require('express')
const router = express.Router()

const {
  createCombo,
  getCombo,
  getAllCombos,
  deleteCombo,
  updateCombo
} = require('../controller/comboController')

router
  .route('/combo')
  .get(getAllCombos)
  .post(createCombo)

router
  .route('/combo/:id')
  .get(getCombo)
  .delete(deleteCombo)
  .patch(updateCombo)

module.exports = router