const propertySchema = require('../../model/postproperty')

const updateProperty = async (req, res, next) => {
    try {
        const token = req.token;
        console.log("Data: ", req.body);
        console.log("Token controller: ", token);
        jwt.verify(token, 'secret-key', async (err) => {
            if (err) {
                console.log("Token error: ", err.message);
                return res.status(400).json({ data: err.message });
            }
            else {
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
                        city,
                        address,
                        state,
                        pincode,
                        image,
                        propertyFor,
                        type,
                        sqft,
                        rate,
                        info
                    }
                };
                // const result = await propertySchema.updateOne(filter, updateDocument);
                console.log("REq body: ", req.body);
            }
        })
    } catch (err) {
        console.log("Own property : ", err.message);
        return res.status(400).json({ data: err.message })
    }

}

module.exports = updateProperty;