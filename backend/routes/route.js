const express = require('express')
const route = express.Router()
const signup = require('../Controller/admin/signup')
const login = require('../Controller/admin/login')
const imageStore = require('../Controller/seller/postpropertyapi')
const addLocation = require('../Controller/admin/addLocation')
const Fileupload = require('../config/upload')
const showLocation = require('../Controller/common/showLocation')
const addPropertyCon = require('../Controller/admin/propertyForapi')
const cartImage = require('../Controller/common/cartImage')
const showPropertyFor = require('../Controller/common/showPropertyFor')
const addingPropertyType = require('../Controller/admin/propertyTypeApi')
const showPropertyType = require('../Controller/common/showPropertyType')
const auth = require('../Controller/auth')
const verifyToken = require('../middleware/verify')
const ownProperty = require('../Controller/seller/showOwnProperty')
const updateProperty = require('../Controller/seller/updateProperty')
const deleteProperty = require('../Controller/seller/deleteProperty')
const getEditProperty = require('../Controller/seller/getEditProperty')

// User API...!
route.post('/realestate/signup', signup)
route.post('/realestate/login', login)
route.post(
  '/realestate/property',
  Fileupload.Fileupload('./uploads').array('image', 10),
  imageStore
)
route.post('/realestate/addlocation', addLocation)
route.post('/realestate/propertyfor', addPropertyCon)
route.post('/realestate/propertyType', addingPropertyType)
route.post('/realestate/auth', verifyToken, auth)

// Get API ...!
route.get('/realestate/cartimage', cartImage)
route.get('/realestate/showlocation', showLocation)
route.get('/realestate/showpropertyfor', showPropertyFor)
route.get('/realestate/showpropertytype', showPropertyType)
route.get('/realestate/ownproperty/:id', verifyToken, ownProperty)
route.get('/realestate/editproperty/:id', verifyToken, getEditProperty)

// Put API...!
route.put('/realestate/updateproperty/:id', verifyToken, Fileupload.Fileupload('./uploads').array('image', 10), updateProperty)

// Delete API...!
route.delete('/realestate/deleteproperty/:id',verifyToken, deleteProperty)

module.exports = route
