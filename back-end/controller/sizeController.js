const Size = require('../models/sizeModel')
const mongoose = require('mongoose')

//get all size
const getAllSizes = async (req, res) => {
  const sizes = await Size.find({})

  res.status(200).json(sizes)
}

//get a single size
const getSize = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error : "No such size"})
  }

  const size = await Size.findById(id)

  if (!size) {
    return res.status(404).json({error : "No such size"})
  }

  res.status(200).json(size)
}

//create new size
const createSize = async (req, res) => {
  const {size_name, size_price, image} = req.body

  try{
    const newSize = await Size.create({size_name, size_price, image})
    res.status(200).json(newSize)
  }
  catch(error){
    res.status(400).json({error:error.message})
  }
}

//delete ouzza
const deleteSize = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error : "No such size"})
  }

  const size = await Size.findOneAndDelete({_id: id})

  if (!size) {
    return res.status(400).json({error : "No such size"})
  }

  res.status(200).json(size)
}

//update size
const updateSize = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error : "No such size"})
  }

  const size = await Size.findOneAndUpdate({_id: id},{
    ...req.body
  })

  if (!size) {
    return res.status(400).json({error : "No such size"})
  }

  res.status(200).json(size)
}

module.exports = {
  getAllSizes,
  getSize,
  createSize,
  deleteSize,
  updateSize
}