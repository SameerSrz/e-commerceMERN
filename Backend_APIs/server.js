const express = require("express");
const ErrorHandler = require("./Middleware/Error");
const app = express();
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require('path');
const connectDatabase = require("./Db/Database")


//Handling uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server")
})

//config
if(process.env.NODE_ENV !== "PRODUCTION")
{
    require("dotenv").config({
        path:"server/config/.env"
    })
}

// connecting database
connectDatabase();



app.use(express.static('public'));

app.use(cors({
    origin: "http://localhost:3000",
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());


app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}));


//config
if(process.env.NODE_ENV !== "PRODUCTION")
{
    require("dotenv").config({
        path:"server/config/.env"
    })
}

  

//import routes
const user = require("./controller/User");

app.use("/api/v1",user);


// for error handler
app.use(ErrorHandler)

// create server
const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

// unhandled promise rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
})