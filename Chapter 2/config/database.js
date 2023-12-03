const mongoose = require("mongoose");
require("dotenv").config();


const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
    })
    .then(()=>{ console.log("DB Connected Successfully")})
    .catch((error) =>{
        console.error("Error",error);
        process.exit(1);
    })
}

module.exports = dbConnect;
