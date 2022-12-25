const verifyToken= async (req,res,next)=>{
    console.log("Verify token here...!")
    const authorization = req.headers['authorization'];
    console.log("Authrization: ",authorization);
    if(typeof authorization !== 'undefined'){
        // const token = authorization.split(' ');
        // console.log('token: ',token);
        // const authorize = token[1];
        // console.log("authorize: ",authorize);
        req.token = authorization;
    }
    else{
        console.log("Need token");
        res.status(400);
    }
    next();
}

module.exports = verifyToken;