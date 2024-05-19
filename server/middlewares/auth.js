const jwt = require("jsonwebtoken");
require("dotenv").config();


exports.auth = async(req,res,next)=>{
    try
    {
        // fecth token from req and authorize it
        const token = req.cookies.jwt 
                      || req.body.token 
                      || req.header("Authorization").replace("Bearer ","");

        console.log("Token of user : ", token);
        if(!token)
        {
            res.status(401).json({
                success:false,
                message:"Token Missing",
            });
        }
        // verify this token 
        try
        {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            req.user = payload;
            console.log("User type : ",req.user.accountType);

        }catch(err)
        {
            res.status(500).json({
                success:false,
                message:"Token is invalid ",
            })
        }
        next();
     
    }catch(err)
    {
        res.status(500).json({
            success:false,
            message:"Internal sever error in auth middleware"
        })   
    }
}

exports.isUser = async(req,res,next)=>{
    try
    {
        if(req.user.accountType!=="user")
        {
            res.status(401).json({
                success:false,
                message:"This Page is protected for you. You are not user."
            })
        }
        next();
    }catch(err)
    {
        res.status(500).json({
            success:false,
            message:"Internal issue in user middleware"
        })
    }
}

exports.isAdmin = async(req,res,next)=>{
    try
    {
        if(req.user.accountType!=="admin")
        {
            res.status(401).json({
                success:false,
                message:"This Page is protected for you. You are not Admin"
            })
        }
        next();

    }catch(err)
    {
        res.status(500).json({
            success:false,
            message:"Internal issue in Admin"
        })
    }
}