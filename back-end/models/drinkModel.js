const mongoose = require("mongoose")

const Schema = mongoose.Schema

const drinkSchema = new Schema({
  drink_name:{
    type: String,
    required: true
  },
  drink_price:{
    type: Number,
    required: true
  },
  drink_description:{
    type: String
  },
  image:{
    type: String
  }
}, { timestamps: true})

module.exports = mongoose.model("Drink", drinkSchema)