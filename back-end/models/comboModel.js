const mongoose = require("mongoose")

const Schema = mongoose.Schema

const comboSchema = new Schema({
  combo_name:{
    type: String,
    required: true
  },
  combo_price:{
    type: Number,
    required: true
  },
  image:{
    type: String,
  },
  combo_description:{
    type: String,
  },
  starters:[{
    starter: { type: Schema.Types.ObjectId, ref: 'Starter' },
    quantity: { type: Number, require: true }
  }],
  pizzas:[{
    size: { type: Schema.Types.ObjectId, ref: 'Size' },
    crust: { type: Schema.Types.ObjectId, ref: 'Crust' },
    pizza: { type: Schema.Types.ObjectId, ref: 'Pizza' },
    quantity:{ type: Number, required: true }
  }]
}, { timestamps: true})

module.exports = mongoose.model("Combo", comboSchema)