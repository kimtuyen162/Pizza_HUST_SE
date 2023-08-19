const Starter = require('../models/starterModel')
const mongoose = require('mongoose')
const Combo = require("../models/comboModel")

//get all starter
const getAllStarters = async (req, res) => {
  const starters = await Starter.find({})

  res.status(200).json(starters)
}

//get a single starter
const getStarter = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error : "No such starter"})
  }

  const starter = await Starter.findById(id)

  if (!starter) {
    return res.status(404).json({error : "No such starter"})
  }

  res.status(200).json(starter)
}

//create new starter
const createStarter = async (req, res) => {
  const {starter_name, starter_price, starter_description, image} = req.body

  try{
    const newStarter = await Starter.create({starter_name, starter_price, starter_description, image})
    res.status(200).json(newStarter)
  }
  catch(error){
    res.status(400).json({error:error.message})
  }
}

//delete ouzza
const deleteStarter = async (req, res) => {
  const { id } = req.params
  const combos = await Combo.find({})

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error : "No such starter"})
  }

  for (const combo of combos){
    const { starters } = combo;
    for (const starter of starters){
      console.log(id);
      console.log(starter.starter.toString());
      console.log('\n');
      if (id == starter.starter.toString())
       return res.status(406).json({error : "Item in a combo"})
    }
  }

  const starter = await Starter.findOneAndDelete({_id: id})

  if (!starter) {
    return res.status(400).json({error : "No such starter"})
  }

  res.status(200).json(starter)
}

//update starter
const updateStarter = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error : "No such starter"})
  }

  const starter = await Starter.findOneAndUpdate({_id: id},{
    ...req.body
  })

  if (!starter) {
    return res.status(400).json({error : "No such starter"})
  }

  res.status(200).json(starter)
}

module.exports = {
  getAllStarters,
  getStarter,
  createStarter,
  deleteStarter,
  updateStarter
}