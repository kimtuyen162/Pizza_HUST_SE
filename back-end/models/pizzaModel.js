const mongoose = require("mongoose")

const Schema = mongoose.Schema

const pizzaSchema = new Schema({
  pizza_name:{
    type: String,
    required: true,
    unique: true
  },
  pizza_price:{
    type: Number,
    required: true
  },
  pizza_description:{
    type: String
  },
  image:{
    type: String
  }
}, { timestamps: true})

module.exports = mongoose.model("Pizza", pizzaSchema)