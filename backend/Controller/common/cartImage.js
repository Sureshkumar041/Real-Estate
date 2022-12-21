const propertySchema = require('../../model/postproperty');

const cartImage = async (req, res, next) => {
    try {
        const uploadingData = await propertySchema.find();
        console.log("Uploading data: ", uploadingData);
        const data= {
            data : uploadingData
        };
        return res.status(200).json({ data: data });
    } catch (error) {
        res.status(400).json({ data: error.message });
    }
}

module.exports = cartImage;