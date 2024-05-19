const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// signup 
exports.signUp = async(req,res)=> {

    try{
        // fetch details
        const {username, email, vehicleNumber, address, age,  password, confirmPassword, contactNumber } = req.body;
        console.log(password);
        console.log(confirmPassword);
        
        
        if(!username || !email || !password || !confirmPassword || !vehicleNumber || !address || !age || !contactNumber) {
            return res.status(400).json({
                success: false,
                message: "please fill all details",
            })
        }

        // passwaord matching
        if(password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password not matched, Please enter correct password",
            })
        }

        // exsisting user
        const exsistingUser = await Users.findOne({email});

        if(exsistingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exist",
            });
        }

        // hash password and store
        let hashPassword = await bcrypt.hash(password, 10);
        const user = await Users.create({username,email, contactNumber, vehicleNumber, address, age, password:hashPassword,accountType:"user"});

        return res.status(200).json({
            success: true,
            message: "User registered successfully ",
            user,
        })

    }catch(err)
    {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Unable to signUp ",
        })
    }
}

// login
exports.login = async (req,res)=> {
    try
    {
        // fetch details
        const { email , password} = req.body ;
        console.log(email, password);

        if(!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill al required fields",
            });
        }

        // email checking
        const exsistingUser = await Users.findOne({email});

        if(!exsistingUser) {
            return res.status(400).json({
                success: false,
                message: "User not registered with this email, Please enter valid email",
            });
        }

        
        const dbPassword = exsistingUser.password;
        // password match 
        const result = await bcrypt.compare(password, dbPassword);
        if(!result) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        // all good
        // generate jwt token and send cookie

        const payload = {
            id: exsistingUser._id,
            email: exsistingUser.email,  
            accountType: exsistingUser.accountType, 
        }

        const token = jwt.sign(payload,process.env.JWT_SECRET, {expiresIn:'1h'});

        exsistingUser.token = token;
        exsistingUser.password = undefined;


        res.cookie("jwt", token, {httpsOnly: true, expiresIn: '48h'}).status(200).json({
            success: true,
            message: "User LoggedIn successfully",
            exsistingUser,
            token,
        });

    }catch(err)
    {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal server error in LogIn ",
        })
    }
}

