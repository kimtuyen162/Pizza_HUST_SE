const express = require('express')
const router = express.Router()

const {
    createOrder,
    getOrder,
    getAllOrders,
    deleteOrder,
    updateOrder
} = require('../controller/orderController')

router
    .route('/order')
    .get(getAllOrders)
    .post(createOrder)

router
    .route('/order/:id')
    .get(getOrder)
    .delete(deleteOrder)
    .patch(updateOrder)

module.exports = router