const express = require('express');
const route = express.Router();
const signup = require('../Controller/signup');

// Signup API
route.post('/realestate/signup',signup);

module.exports = route;