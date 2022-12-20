const express = require('express');
const route = express.Router();
const signup = require('../Controller/signup');
const login = require('../Controller/login');
const imageStore = require('../Controller/postpropertyapi');
const addLocation = require('../Controller/addLocation')
const upload = require('../middleware/upload');
const showLocation = require('../Controller/showLocation');

// Signup API
route.post('/realestate/signup', signup);
route.post('/realestate/login', login);
route.post('/realestate/property', upload.array('image[]'), imageStore);
route.post('/realestate/addlocation',addLocation);
route.get('/realestate/showlocation',showLocation);

module.exports = route;