const postproperty = require('../../model/postproperty');
const jwt = require('jsonwebtoken')

const ownProperty = async (req, res, next) => {
    try {
        const token = req.token;
        console.log("Token: ", token);
        jwt.verify(token, 'secret-key', async (err, validate) => {
            if (err) {
                console.log("Token error: ", err.message);
                return res.status(400).json({ data: err.message });
            }
            else {
                const sellerId = req.params.id;
                console.log("Url: ", req.url);
                
                console.log("SellerId: ", sellerId);
                const property = await postproperty.find({ sellerId: sellerId });
                const data = {
                    message: 'Success',
                    data: property
                };
                if (property !== 'undefined') {
                    res.status(200).json({ data: data });
                    next();
                }
                else {
                    const data = {
                        message: 'Failed',
                        data: null
                    }
                    return res.status(400).json({ data: data });
                }
            }
        })
    } catch (err) {
        console.log("Own property : ", err.message);
    }
}

module.exports = ownProperty;