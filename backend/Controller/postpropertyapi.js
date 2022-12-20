const propertySchema = require('../model/postproperty');


const imageStore = async (req, res) => {
    console.log('req.body', req.body)

    const url = req.protocol + "://" + req.get("host");
    const city = req.body.city;
    const state = req.body.state;
    // const image = req.files.image[0].originalname;
    const image = req.files.image;
    // console.log("Image: ",image);
    // let imageArray = [];
    // [...image].forEach(element => {
    //     image.push(element.originalname);
    //     console.log("Elments: ", element);
    // });
    console.log("Image array: ",imageArr);
    // const da = { state, city, image };
    // var property = new propertySchema(da);
    // property = await property.save();
    // console.log("Photo: ", req.files.image);
    return res.status(200).json({ message: "successfully added" });






    
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