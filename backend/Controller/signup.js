const sellerSchema = require('../model/sellerSchema');
const buyerSchema = require('../model/buyerSchema');

const signup = async (req, res, next) => {
    console.log("Register Data");
    console.log("Register data: ",await req.body);
    try {
        const { userName, email, role, phoneNumber, password } = await req.body;
        console.log(userName);

        const sendResponse = (sts, state, msg) => {
            return res.status(sts).json({
                "Status": state,
                "Message": msg
            });
        }

        if (role === "Buyer") {
            console.log("Buyer");
            const userInput = new buyerSchema({
                userName: userName,
                email: email,
                role: role,
                phoneNumber: phoneNumber,
                password: password
            });
            console.log(userInput);
            userInput.save((err) => {
                if (err) {
                    sendResponse(400, "Failed", "Register unsuccessful");
                    return true;
                }
                else {
                    sendResponse(200, "Success", "Successfully registered");
                    return true;
                }
            });
            // return true;
        } else {
            console.log("Seller");
            const userInput = new sellerSchema({
                userName: userName,
                email: email,
                role: role,
                phoneNumber: phoneNumber,
                password: password
            });
            console.log(userInput);
            userInput.save((err) => {
                if (err) {
                    sendResponse(400, "Failed", "Register unsuccessful");
                    return true;
                }
                else {
                    sendResponse(200, "Success", "Successfully registered");
                    return true;
                }
            });
            // return true;
        }
        return true;
    } catch (error) {
        // sendResponse(400, "Failed",error);
        console.log(error.message);
        return true;
    }
    // console.log("Register data: ",await req.body);
    // return res.status(200).json({
    //     Process : "Success",
    //     Message : "Regsiter successfully...!"
    // });
    next();
};

module.exports = signup;