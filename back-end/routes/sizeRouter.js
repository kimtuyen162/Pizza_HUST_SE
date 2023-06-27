const express = require('express')
const router = express.Router()

const {
  createSize,
  getSize,
  getAllSizes,
  deleteSize,
  updateSize
} = require('../controller/sizeController')

router
  .route('/size')
  .get(getAllSizes)
  .post(createSize)

router
  .route('/size/:id')
  .get(getSize)
  .delete(deleteSize)
  .patch(updateSize)

module.exports = router