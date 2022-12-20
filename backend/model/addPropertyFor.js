const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Schema = new schema({
    propertyFor:{type:string}
},{
    versionKey:false
});

const addPropertyFor = mongoose.model('Property For',Schema);
modeule.exports = addPropertyFor;