const Combo = require("../models/comboModel");
const Drink = require('../models/drinkModel')
const mongoose = require('mongoose')

//get all drink
const getAllDrinks = async (req, res) => {
  const drinks = await Drink.find({})

  res.status(200).json(drinks)
}

//get a single drink
const getDrink = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error : "No such drink"})
  }

  const drink = await Drink.findById(id)

  if (!drink) {
    return res.status(404).json({error : "No such drink"})
  }

  res.status(200).json(drink)
}

//create new drink
const createDrink = async (req, res) => {
  const {drink_name, drink_price, drink_description, image} = req.body

  try{
    const newDrink = await Drink.create({drink_name, drink_price, drink_description, image})
    res.status(200).json(newDrink)
  }
  catch(error){
    res.status(400).json({error:error.message})
  }
}

//delete ouzza
const deleteDrink = async (req, res) => {
  const { id } = req.params
  const combos = await Combo.find({})

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error : "No such drink"})
  }

  for (const combo of combos){
    const { drinks } = combo;
    for (const drink of drinks){
      console.log(id);
      console.log(drink.drink.toString());
      console.log('\n');
      if (id == drink.drink.toString())
       return res.status(406).json({error : "Item in a combo"})
    }
  }

  const drink = await Drink.findOneAndDelete({_id: id})

  if (!drink) {
    return res.status(400).json({error : "No such drink"})
  }

  res.status(200).json(drink)
}

//update drink
const updateDrink = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error : "No such drink"})
  }

  const drink = await Drink.findOneAndUpdate({_id: id},{
    ...req.body
  })

  if (!drink) {
    return res.status(400).json({error : "No such drink"})
  }

  res.status(200).json(drink)
}

module.exports = {
  getAllDrinks,
  getDrink,
  createDrink,
  deleteDrink,
  updateDrink
}