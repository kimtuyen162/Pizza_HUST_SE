require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const pizzaRoutes = require('./routes/pizzaRouter')
const crustRoutes = require('./routes/crustRouter')
const sizeRoutes = require('./routes/sizeRouter')
const comboRoutes = require('./routes/comboRouter')
const drinkRoutes = require('./routes/drinkRouter')
const starterRoutes = require('./routes/starterRouter')
const userRoutes = require('./routes/userRouter')


//express app
const app = express()

//middleware
app.use(express.json())

//routes
app.use('/api', pizzaRoutes)
app.use('/api', crustRoutes)
app.use('/api', sizeRoutes)
app.use('/api', comboRoutes)
app.use('/api', drinkRoutes)
app.use('/api', starterRoutes)
app.use('/api', userRoutes)

//mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to database')
    app.listen(process.env.PORT, () => {
      console.log('Connected to: http://localhost:4000 \n Listen on port: 4000')
    })
  })
  .catch((error) =>{
    console.log(error)
  })
