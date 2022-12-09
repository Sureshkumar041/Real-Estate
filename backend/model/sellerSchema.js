const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userName: {
        type: String,
        // required: [true, 'User name is required'],
        // minlength: [3, 'Username cannot be less than 3']
    },
    email: {
        type: String,
        // required: [true, 'Email is required']
    },
    role: {
        type: String,
        // required: [true, 'Role is required']
    },
    phoneNumber: {
        type: Number
        // required: [true, 'Phone number is required']
    },
    password: {
        type: String,
        // required: [true, 'Password is required'],
        // test: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
    }
}, { timestamps: true, versionKey: false });

const sellerSchema = mongoose.model('sellerSchema', schema);

module.exports = sellerSchema;