const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userName: { type: String },
    email: { type: String },
    role: { type: String },
    phoneNumber: { type: Number },
    password: { type: String }
}, { timestamps: true, versionKey: false });

const sellerSchema = mongoose.model('sellerSchema', schema);

module.exports = sellerSchema;