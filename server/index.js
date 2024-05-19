const express = require("express");
const dbConnect = require("./config/database");
require("dotenv").config(); 

const app = express();

// middlewares 
app.use(express.json());
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const cors = require("cors");
app.use(cors({
    origin:"http://localhost:3000",
    credentials: true,
}));



// routing
const user = require('./routes/User');
app.use("/api/v1/auth", user);


const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is start at port no. ${PORT}`);
});


// connections
dbConnect();


// default route
app.get("/", (req,res)=>{
    res.send(`<h1> This is default page of Study Notion </h1>`);
})