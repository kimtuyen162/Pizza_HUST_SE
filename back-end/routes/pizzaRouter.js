const express = require('express')
const router = express.Router()

const {
  createPizza,
  getPizza,
  getAllPizzas,
  deletePizza,
  updatePizza
} = require('../controller/pizzaController')

router
  .route('/pizza')
  .get(getAllPizzas)
  .post(createPizza)

router
  .route('/pizza/:id')
  .get(getPizza)
  .delete(deletePizza)
  .patch(updatePizza)

module.exports = router