const addPropertyFor = require('../../model/addPropertyFor');

const addPropertyCon = async (req, res, next) => {
    try {
        const data = {
            message: 'Success',
            data: 'Property for addsuccessfully'
        };
        console.log("Data: ".req.body.propertyFot);
        const addingProperty = new addPropertyFor(req.body);
        await addingProperty.save(function (err) {
            if (!err) {
                console.log("addingProperty: ", addingProperty);
                res.status(200).json({ data: data });
                return true;
            }
        })
    } catch (err) {
        const data = {
            message: 'Failed',
            data: 'Enable to add'
        };
        return res.status(400).json({ data: data });
        next();
    }

}

module.exports = addPropertyCon;