const express = require('express')
const router = express.Router()

const {
  createCrust,
  getCrust,
  getAllCrusts,
  deleteCrust,
  updateCrust
} = require('../controller/crustController')

router
  .route('/crust')
  .get(getAllCrusts)
  .post(createCrust)

router
  .route('/crust/:id')
  .get(getCrust)
  .delete(deleteCrust)
  .patch(updateCrust)

module.exports = router