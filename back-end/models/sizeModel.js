const mongoose = require('mongoose')

const Schema = mongoose.Schema

const sizeSchema = new Schema({
  size_name:{
    type: String,
    required: true
  },
  size_price:{
    type: Number,
    required: true
  },
  image:{
    type: String,
  },
}, { timestamps: true})

module.exports = mongoose.model('Size', sizeSchema)