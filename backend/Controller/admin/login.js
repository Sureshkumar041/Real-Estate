const sellerSchema = require('../../model/sellerSchema');
const buyerSchema = require('../../model/buyerSchema');
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');

const login = async (req, res, next) => {
    const { userName, password } = req.body;
    let data = {}, status, msg, info;

    console.log("User seller in : ", await sellerSchema.findOne({ userName: userName }));
    const validateUser = (await sellerSchema.findOne({ userName: userName }) || await sellerSchema.findOne({ email: userName })) || (await buyerSchema.findOne({ userName: userName }) ||
        await buyerSchema.findOne({ email: userName }));

    console.log("Validate user : ", validateUser);

    // Send response
    const sendResponse = (sts, state, msg) => {
        return res.status(sts).json({
            "Status": state,
            "Message": msg
        });
    }

    if (validateUser) {

        var decrypt = crypto.AES.decrypt(validateUser.password, 'abcdefg').toString(crypto.enc.Utf8);
        console.log("User password: ", decrypt);

        const token = jwt.sign({ data: "suresh" }, 'secret-key', { expiresIn: '1h' });
        if (password === decrypt) {
            data = {
                status: 200,
                msg: 'Login successfully',
                info: {
                    id: validateUser._id,
                    role: validateUser.role,
                    userName: validateUser.userName,
                    email: validateUser.email
                },
                token: token
            }

            // res.send({ data: data });

            res.send({ data: data });

            return true;
        } else {
            data = {
                status: 400,
                msg: 'Login failed',
                info: 'Invalid password'
            }
            res.send({ data: data });
            return true;
        }

    } else {
        data = {
            status: 400,
            msg: 'Login failed',
            info: 'Invalid user name'
        }
        res.send({ data: data });
        return true;
    }
}

module.exports = login;