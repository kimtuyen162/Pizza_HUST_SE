const mongoose = require("mongoose")

const Schema = mongoose.Schema

const orderSchema = new Schema({
  user_id:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  order_date:{
    type: Date,
    required: true
  },
  total_price:{
    type: Number,
    required: true
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
  }],
  combos:[{
    combo: { type: Schema.Types.ObjectId, ref: 'Combo' },
    quantity:{ type: Number, required: true }
  }],
}, { timestamps: true})

module.exports = mongoose.model("Order", orderSchema)