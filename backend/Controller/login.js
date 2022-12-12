const login =(req,res,next)=>{
    res.status(200).json({
        message : 'Success'
    });
    return true;
}

module.exports = login;