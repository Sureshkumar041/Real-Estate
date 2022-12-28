const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    try {
        console.log("Verify token here...!")
        const authorization = req.headers['authorization'];
        console.log("Authrization: ", authorization);
        if (typeof authorization !== 'undefined') {
            // req.token = authorization;
            jwt.verify(authorization, 'secret-key', async (err, validateuser) => {
                if (err) {
                    console.log("Tokensss...!");
                    console.log("Token error: ", err.message);
                    // return res.status(400).json({ data: err.message });
                    const data = {
                        message : 'Failed',
                        data : err.message
                    }
                    return res.status(400).json({data : data})
                }
                else {
                    console.log("Validate user...!");
                    next();
                }
            })
        } else {
            throw new Error('Need token')
        }
    } catch (err) {
        console.log("Need token");
        const data = {
            message: 'Failed',
            data: err.message
        }
        res.status(400).json({ data: data })
    }
}

module.exports = verifyToken;