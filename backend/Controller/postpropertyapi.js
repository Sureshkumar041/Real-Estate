const propertySchema = require('../model/postproperty');

const imageStore = (req, res, next) => {
    try {
        var property = new propertySchema(req.body);

        console.log("Request files: ", req.files);

        if (req.files) {
            console.log("Controller");
            let path = '';
            req.files.forEach(function (files, index, array) {
                path = path + files.path + ',';
                console.log("1");
            });
            path = path.substring(0, path.lastIndexOf(","));
            property.image = path;
        } else {
            console.log("Image store control not...!");
        }

        property.save()
            .then(response => {
                console.log("Doneee...!");
                return res.json({
                    message: 'Image stored successfully'
                })
            })

    } catch (error) {
        console.log("Error");
        return res.json({
            message: 'Image not stored'
        })
    }

}

module.exports = imageStore;