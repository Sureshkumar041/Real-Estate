const fs = require("fs");
const multer = require("multer");

const Fileupload = (path) => {
    const storage = multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, path)
        },
        filename: function (req, file, callback) {
            const uploadname = file.originalname.split(".");
            const extension = "." + uploadname[uploadname.length - 1];
            const fileuploadname = Date.now().toString();
            fs.readFile(path + file.originalname, (err, res) => {
                if (!err) {
                    callback(null, fileuploadname + extension)
                }
                else {
                    callback(null, fileuploadname + extension)
                }
            })
        }
    })
    const uploaded = multer({ storage: storage });
    return uploaded;
}
module.exports = {
    Fileupload: Fileupload
}
