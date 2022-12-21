const propertySchema = require('../../model/postproperty');


const imageStore = async (req, res) => {
    try {
        console.log('req.body', req.body)
        const url = req.protocol + "://" + req.get("host");
        const state = req.body.state,
            address = req.body.address,
            rate = req.body.rate,
            city = req.body.city,
            type = req.body.type,
            propertyFor = req.body.propertyFor,
            sqft = req.body.sqft,
            imageArray = req.files,
            info = req.body.info,
            pincode = req.body.pincode;
        let image = [];
        [...imageArray].forEach(element => {
            image.push(element.originalname);
        });
        const data = {
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
        };
        var property = new propertySchema(data);
        property = await property.save();
        return res.status(200).json({ message: "successfully added" });

    } catch (err) {
        return res.status(400).json({ message: err.message })
    }






    // try {
    //     console.log("Property Api");
    //     var property = new propertySchema(req.body);

    //     // console.log("Request files: ", req.files.image);

    //     if (req) {
    //         console.log("Request file data: ",req.files);
    //         console.log("Controller");
    //         let path = '';
    //         req.files.forEach(function (files, index, array) {
    //             path = path + files.path + ',';
    //             console.log("1");
    //         });
    //         path = path.substring(0, path.lastIndexOf(","));
    //         property.image = path;  

    //         // Save in the database...!
    //         property.save()
    //             .then(response => {
    //                 console.log("Doneee...!");
    //                 return res.json({
    //                     message: 'Image stored successfully'
    //                 })
    //             })
    //     } else {
    //         console.log("Image store control not...!");
    //     }


    // } catch (error) {
    //     console.log("Error");module.expo
    //     return res.json({
    //         message: 'Image not stored'
    //     })
    // }

}

module.exports = imageStore;