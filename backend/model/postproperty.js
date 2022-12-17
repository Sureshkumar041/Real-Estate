const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    address: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: Number },
    image: { type: String },
    type: { type: String },
    bhk: { type: String },
    sqft: { type: Number },
    rate: { type: Number },
    info: { type: String, data: Buffer }
});

const propertySchema = mongoose.model('propertySchema', schema);

module.exports = propertySchema;