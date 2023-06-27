const Pizza = require('../models/pizzaModel')
const mongoose = require('mongoose')

//get all pizza
const getAllPizzas = async (req, res) => {
  const pizzas = await Pizza.find({})

  res.status(200).json(pizzas)
}

//get a single pizza
const getPizza = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error : "No such pizza"})
  }

  const pizza = await Pizza.findById(id)

  if (!pizza) {
    return res.status(404).json({error : "No such pizza"})
  }

  res.status(200).json(pizza)
}

//create new pizza
const createPizza = async (req, res) => {
  const {pizza_name, pizza_price, pizza_description, image} = req.body

  try{
    const newPizza = await Pizza.create({pizza_name, pizza_price, pizza_description, image})
    res.status(200).json(newPizza)
  }
  catch(error){
    res.status(400).json({error:error.message})
  }
}

//delete ouzza
const deletePizza = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error : "No such pizza"})
  }

  const pizza = await Pizza.findOneAndDelete({_id: id})

  if (!pizza) {
    return res.status(400).json({error : "No such pizza"})
  }

  res.status(200).json(pizza)
}

//update pizza
const updatePizza = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error : "No such pizza"})
  }

  const pizza = await Pizza.findOneAndUpdate({_id: id},{
    ...req.body
  })

  if (!pizza) {
    return res.status(400).json({error : "No such pizza"})
  }

  res.status(200).json(pizza)
}

module.exports = {
  getAllPizzas,
  getPizza,
  createPizza,
  deletePizza,
  updatePizza
}