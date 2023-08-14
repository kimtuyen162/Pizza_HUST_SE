const mongoose = require('mongoose')

const Schema = mongoose.Schema

const crustSchema = new Schema({
  crust_name:{
    type: String,
    required: true
  },
  crust_price:{
    type: Number,
    required: true
  },
  image:{
    type: String,
  },
}, { timestamps: true})

module.exports = mongoose.model('Crust', crustSchema)