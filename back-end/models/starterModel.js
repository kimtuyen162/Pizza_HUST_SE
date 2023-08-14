const mongoose = require("mongoose")

const Schema = mongoose.Schema

const starterSchema = new Schema({
  starter_name:{
    type: String,
    required: true
  },
  starter_price:{
    type: Number,
    required: true
  },
  image:{
    type: String,
  },
  starter_description:{
    type: String,
  }
}, { timestamps: true})

module.exports = mongoose.model("Starter", starterSchema)