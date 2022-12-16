const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    image: { type: String }
});

const propertySchema = mongoose.model('propertySchema', schema);
module.exports = propertySchema;