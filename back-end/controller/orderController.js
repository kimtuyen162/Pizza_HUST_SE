const Order = require('../models/orderModel');
const Combo = require('../models/comboModel')
const Size = require('../models/sizeModel')
const Crust = require('../models/crustModel')
const Pizza = require('../models/pizzaModel')
const mongoose = require('mongoose');

// Create a new order
const createOrder = async (req, res) => {
    const { order_id, user_id, total_price } = req.body;
    const newOrder = await Order.create({ order_id, user_id, total_price });
    res.status(201).json(newOrder);
  }

// Retrieve all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: "Can not find any orders" });
  }
}

// Retrieve a single order by ID
const getOrder = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such order" });
  }

  try {
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ error: "No such order" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: "ERROR!" });
  }
}

// Update an order by ID
const updateOrder = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such order" });
  }

  try {
    const updatedOrder = await Order.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ error: "No such order" });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete an order by ID
const deleteOrder = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such order" });
  }

  try {
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ error: "No such order" });
    }
    res.status(200).json(deletedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createOrder,
  getAllOrders,
  getOrder,
  updateOrder,
  deleteOrder
};
