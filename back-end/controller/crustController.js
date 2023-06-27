const Crust = require('../models/crustModel')
const mongoose = require('mongoose')

//get all crust
const getAllCrusts = async (req, res) => {
  const crusts = await Crust.find({})

  res.status(200).json(crusts)
}

//get a single crust
const getCrust = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error : "No such crust"})
  }

  const crust = await Crust.findById(id)

  if (!crust) {
    return res.status(404).json({error : "No such crust"})
  }

  res.status(200).json(crust)
}

//create new crust
const createCrust = async (req, res) => {
  const {crust_name, crust_price, image} = req.body

  try{
    const newCrust = await Crust.create({crust_name, crust_price, image})
    res.status(200).json(newCrust)
  }
  catch(error){
    res.status(400).json({error:error.message})
  }
}

//delete ouzza
const deleteCrust = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error : "No such crust"})
  }

  const crust = await Crust.findOneAndDelete({_id: id})

  if (!crust) {
    return res.status(400).json({error : "No such crust"})
  }

  res.status(200).json(crust)
}

//update crust
const updateCrust = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error : "No such crust"})
  }

  const crust = await Crust.findOneAndUpdate({_id: id},{
    ...req.body
  })

  if (!crust) {
    return res.status(400).json({error : "No such crust"})
  }

  res.status(200).json(crust)
}

module.exports = {
  getAllCrusts,
  getCrust,
  createCrust,
  deleteCrust,
  updateCrust
}