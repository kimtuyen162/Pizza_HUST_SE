const Combo = require("../models/comboModel");
const Size = require("../models/sizeModel");
const Crust = require("../models/crustModel");
const Pizza = require("../models/pizzaModel");
const mongoose = require("mongoose");

//get all combo
const getAllCombos = async (req, res) => {
  const combos = await Combo.find({});

  res.status(200).json(combos);
};

//get a single combo
const getCombo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such combo" });
  }

  const combo = await Combo.findById(id);

  if (!combo) {
    return res.status(404).json({ error: "No such combo" });
  }

  res.status(200).json(combo);
};

//create new combo
const createCombo = async (req, res) => {
  const {
    combo_name,
    combo_price,
    image,
    combo_description,
    starters,
    drinks,
    pizzas,
  } = req.body;

  const orderedPizzas = [];

  for (const orderedPizza of pizzas) {
    const { size, crust, pizza, quantity } = orderedPizza;

    const ordPizza = {
      size: await Size.findById(size).exec(),
      crust: await Crust.findById(crust).exec(),
      pizza: await Pizza.findById(pizza).exec(),
      quantity: quantity,
    };
    orderedPizzas.push(ordPizza);
  }

  const orderedDrinks = [];

  for (const orderedDrink of drinks) {
    const { drink, quantity } = orderedDrink;

    const ordDrink = {
      drink: await Drink.findById(drink).exec(),
      quantity: quantity,
    };
    orderedDrinks.push(ordDrink);
  }

  const orderedStarters = [];

  for (const orderedStarter of starters) {
    const { starter, quantity } = orderedStarter;

    const ordStarter = {
      starter: await Starter.findById(starter).exec(),
      quantity: quantity,
    };
    orderedStarters.push(ordStarter);
  }

  try {
    const newCombo = await Combo.create({
      combo_name,
      combo_price,
      image,
      combo_description,
      pizzas: orderedPizzas,
      starters: orderedStarters,
      drinks:orderedDrinks
    });
    res.status(200).json(newCombo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete ouzza
const deleteCombo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such combo" });
  }

  const combo = await Combo.findOneAndDelete({ _id: id });

  if (!combo) {
    return res.status(400).json({ error: "No such combo" });
  }

  res.status(200).json(combo);
};

//update combo
const updateCombo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such combo" });
  }

  const combo = await Combo.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!combo) {
    return res.status(400).json({ error: "No such combo" });
  }

  res.status(200).json(combo);
};

module.exports = {
  getAllCombos,
  getCombo,
  createCombo,
  deleteCombo,
  updateCombo,
};
