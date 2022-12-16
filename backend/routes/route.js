const express = require('express');
const route = express.Router();
const signup = require('../Controller/signup');
const login = require('../Controller/login');
const imageStore = require('../Controller/postpropertyapi');
const upload = require('../middleware/upload')

// Signup API
route.post('/realestate/signup', signup);
route.post('/realestate/login', login);
route.post('/realestate/property', upload.array('image[]'), imageStore)

module.exports = route;