const propertySchema = require('../../model/postproperty')
// const jwt = require('jsonwebtoken')
const connect = require('../../config/database')

const updateProperty = async (req, res, next) => {
    try {
        const url = req.protocol + "://" + req.get("host");
        const imgpath = url + "/public/" + req.files;
        const state = req.body.state,
            address = req.body.address,
            rate = req.body.rate,
            city = req.body.city,
            type = req.body.type,
            propertyFor = req.body.propertyFor,
            sqft = req.body.sqft,
            imageArray = req.files,
            info = req.body.info,
            pincode = req.body.pincode,
            sellerId = req.body.sellerId
        let image = [];
        [...imageArray].forEach(element => {
            image.push(url + "/uploads/" + element.filename);
        });
        const filter = { _id: req.params.id };
        const updateDocument = {
            $set: {
                'city': city,
                'address': address,
                'state': state,
                'pincode': pincode,
                'image': image,
                'property': propertyFor,
                'type': type,
                'sqft': sqft,
                'rate': rate,
                'info': info
            }
        };
        const result = await propertySchema.findByIdAndUpdate(filter, updateDocument)
            .then(response => {
                console.log("Response: ", response)
                const data = {
                    message: 'Success',
                    data: 'Property updated successfully'
                }
                return res.status(200).json({ data: data })
                next()
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    } catch (err) {
        console.log("Own property : ", err.message);
        return res.status(400).json({ data: err.message })
    }

}

module.exports = updateProperty;