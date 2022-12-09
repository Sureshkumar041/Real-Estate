const sellerSchema = require('../model/sellerSchema');
const buyerSchema = require('../model/buyerSchema');

const signup = async (req, res, next) => {
    // console.log("Register Data");
    // console.log("Register data: ",await req.body);
    try {
        const { userName, email, role, phoneNumber, password } = await req.body;
        console.log('userName:', userName);

        const sendResponse = (sts, state, msg) => {
            return res.status(sts).json({
                "Status": state,
                "Message": msg
            });
        }

        if (role === "Buyer") {
            console.log("Buyer");
            const userInput = new buyerSchema(req.body);
            await userInput.save();
            sendResponse(200, "Success", "Successfully registered");
            console.log("Successfully registered");
            return true;
        } else {
            console.log("Seller");
            const userInput = new sellerSchema(req.body);
            await userInput.save();
            sendResponse(200, "Success", "Successfully registered");
            console.log("Successfully registered");
            return true;
        }
    } catch (error) {
        // sendResponse(400, "Failed",error);
        console.log(error.message);
        return res.status(400).json({
            message : 'Failed',
            debuginfo : error
        })
    }
    next();
};

module.exports = signup;