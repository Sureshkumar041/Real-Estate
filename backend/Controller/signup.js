const sellerSchema = require('../model/sellerSchema');
const buyerSchema = require('../model/buyerSchema');
const crypto = require('crypto-js');

const signup = async (req, res, next) => {
    try {
        const { userName, email, role, phoneNumber, password } = await req.body;

        const sendResponse = (sts, state, msg) => {
            return res.status(sts).json({
                "Status": state,
                "Message": msg
            });
        }

        if (req.body.role === "Buyer") {
            console.log("Buyer");
            const userInput = new buyerSchema(req.body);

            // Checking if  username and email already exists or not ...!
            const usernamechk = await buyerSchema.findOne({ userName: req.body.userName});
            const emailchk = await buyerSchema.findOne({ email: req.body.email });
            console.log("Values: ",usernamechk,'Netx: ',emailchk);
            // console.log('usernamechk : ',usernamechk.userName);
            // console.log('emailchk : ',emailchk.email);

            if (usernamechk  || emailchk ) {
                console.log("exists");
                sendResponse(400, 'Failed', 'Username or email already exists...! ');
                return true;
            } else {
                // Encrypt the Password
                userInput.password = crypto.AES.encrypt(userInput.password, 'abcdefg').toString();

                // Register data storing in the database
                await userInput.save();
                sendResponse(200, "Success", "Successfully registered");
                console.log("Successfully registered");
                return true;
            }
        } else {
            console.log("Seller");
            const userInput = new sellerSchema(req.body);

            const sellernamechk = await sellerSchema.findOne({ userName: userName });
            const selleremailchk = sellerSchema.findOne({ email: email });
            console.log("Values: ",sellernamechk,'Netx: ',selleremailchk);

            if (sellernamechk || selleremailchk) {
                console.log("exists");
                sendResponse(400, 'Failed', 'Username or email already...! ');
                return true;
            } else {
                // Encrypt the Password
                userInput.password = crypto.AES.encrypt(userInput.password, 'abcdefg').toString();

                await userInput.save();
                sendResponse(200, "Success", "Successfully registered");
                console.log("Successfully registered");
                return true;
            }
        }
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({
            message: 'Failed',
            debuginfo: error
        })
    }
    next();
};

// var decrypt = crypto.AES.decrypt(userInput.password, 'abcdefg').toString(crypto.enc.Utf8);
// console.log("User password: ", decrypt);

module.exports = signup;