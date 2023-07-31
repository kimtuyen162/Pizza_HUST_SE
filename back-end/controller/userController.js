const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'awuichaiuwchasasdwd123';
const User = require('../models/userkModel')
const mongoose = require('mongoose')

//log in
const login = async(req, res) => {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email });
    if (userDoc) {
        const checkPass = bcrypt.compareSync(password, userDoc.password);
        if (checkPass) {
            jwt.sign(
                { email: userDoc.email, id: userDoc._id },
                jwtSecret,
                {},
                (err, token) => {
                    if (err) {
                        throw err;
                    }
                    res.cookie('token', token).json(userDoc);
                },
            );
        } else {
            res.status(422).json('Pass NOT OK');
        }
    } else {
        res.status(422).json('Not found account');
    }
}

const profile = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, (err, user) => {
            if (err) {
                throw err;
            }
            res.json(user);
        });
    } else res.json(null);
}

//logout
const logout = (req, res) => {
    res.cookie('token', '').json(true);
}

const user = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, user) => {
            if (err) {
                throw err;
            }
            const { email } = user;
            const userDoc = await User.find({ email: email });
            res.json(userDoc);
        });
    } else res.json(null);
}

//register
const register = async(req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const userDoc = await User.create({
            firstName,
            lastName,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        });
        res.json(userDoc);
    } catch (e) {
        res.status(422).json(e);
    }
}

module.exports = {
  login,
  logout,
  register,
  user,
  profile,
}