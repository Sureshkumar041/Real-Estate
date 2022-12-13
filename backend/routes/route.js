const express = require('express');
const route = express.Router();
const signup = require('../Controller/signup');
const login = require('../Controller/login')

// Signup API
route.post('/realestate/signup',signup);
route.post('/realestate/login',login);

module.exports = route;