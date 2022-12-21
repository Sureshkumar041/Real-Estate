const express = require('express');
const route = express.Router();
const signup = require('../Controller/admin/signup');
const login = require('../Controller/admin/login');
const imageStore = require('../Controller/seller/postpropertyapi');
const addLocation = require('../Controller/admin/addLocation')
const Fileupload = require("../config/upload")
const showLocation = require('../Controller/common/showLocation');
const addPropertyCon = require('../Controller/admin/propertyForapi');
const cartImage = require('../Controller/common/cartImage');

// Signup API
route.post('/realestate/signup', signup);
route.post('/realestate/login', login);
// route.post('/realestate/property', Fileupload.Fileupload('./uploads').fields([{ name: 'image', maxCount: 10 }]), imageStore);
route.post('/realestate/property', Fileupload.Fileupload('./uploads').array('image', 10), imageStore);
route.post('/realestate/addlocation', addLocation);
route.get('/realestate/showlocation', showLocation);
route.post('/realestate/propertyfor', addPropertyCon);
route.get('/realestate/cartimage',cartImage);

module.exports = route;