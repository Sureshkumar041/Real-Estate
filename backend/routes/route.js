const express = require('express');
const route = express.Router();
const signup = require('../Controller/signup');

// Signup API
route.post('/',signup);

module.exports = route;