const sellerSchema = require('../model/sellerSchema');
const buyerSchema = require('../model/buyerSchema');
const crypto = require('crypto-js');

const login = async (req, res, next) => {
    const { userName, password } = req.body;
    let data = {}, status, msg, info;

    const validateUser = (await sellerSchema.findOne({ userName: userName }) || await sellerSchema.findOne({ email: userName })) || (await buyerSchema.findOne({ userName: userName }) ||
        await buyerSchema.findOne({ email: userName }));

    console.log("Validate user : ", validateUser);

    // Send response
    const sendResponse = (sts, state, msg) => {
        return res.status(sts).json({
            "Status": state,
            "Message": msg
        });
        // return res.data;
    }

    if (validateUser) {

        var decrypt = crypto.AES.decrypt(validateUser.password, 'abcdefg').toString(crypto.enc.Utf8);
        console.log("User password: ", decrypt);

        if (password === decrypt) {
            data = {
                status: 200,
                msg: 'Login successfully',
                info: validateUser
            }
            res.send({data:data});
            return true;
        } else {
            sendResponse(400, 'Failed', 'Invalid password');
            return true;
        }

    } else {
        sendResponse(400, 'Failed', 'Invalid user name');
        return true;
    }
}

module.exports = login;