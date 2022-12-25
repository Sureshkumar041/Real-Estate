const postproperty = require('../../model/postproperty');

const ownProperty = async (req, res, next) => {
    try {
        const seller = req.param.id;
        const property = await postproperty.find({ seller: seller });
        const data = {
            message: 'Success',
            data: property
        };
        if(property !== 'undefined'){
            res.status(200).json({ data: data });
        }
        else{
            const data = {
                message : 'Failed',
                data : null
            }
            res.status(200).json({data : data});
        }
        next();
    } catch (err) {
        console.log("Own property : ",err.message);
    }
}

module.exports = ownProperty;