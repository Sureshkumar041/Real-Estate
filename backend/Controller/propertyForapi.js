const propertyFor = require('../model/addPropertyFor');

const addPropertyFor = async (req, res, next) => {
    try {
        const adddingProperty = new propertyFor(req.body);
        console.log("Add property: ", addingProperty);
    } catch (err) {
        console.log("Error: ", err.message);
    }
}