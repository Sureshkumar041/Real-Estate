const propertySchema = require('../model/postproperty');

const imageStore=(req,res,next)=>{
    if(req.file){
        var img = req.file.path
    }
    var property = new propertySchema({
        image:img
    });
    property.save()
    .then(res=>{
        console.log("Doneee...!");
        return res.json({
            message: 'Image stored successfully'
        })
    })
    .catch(err=>{
        return res.json({
            message: 'Image not stored'
        })
    })
}

module.exports = imageStore;