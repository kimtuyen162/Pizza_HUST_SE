const express = require('express')
const router = express.Router()

const {
  createDrink,
  getDrink,
  getAllDrinks,
  deleteDrink,
  updateDrink
} = require('../controller/drinkController')

router
  .route('/drink')
  .get(getAllDrinks)
  .post(createDrink)

router
  .route('/drink/:id')
  .get(getDrink)
  .delete(deleteDrink)
  .patch(updateDrink)

module.exports = router