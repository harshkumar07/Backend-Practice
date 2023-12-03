const express = require("express");
const app = express();


require("dotenv").config();

const PORT = process.env.PORT || 4000;

//to Parse data 

app.use(express.json());

//import routes for todo api

const todoRoutes = require("./routes/todo");

app.use("/api/v1",todoRoutes);

app.listen(PORT,()=>{
    console.log(`Server Started at PORT ${PORT}`);
})

const dbConnect = require("./config/database");
dbConnect();

app.get('/',(req,res)=>{
        res.send(`<h2>This is HomePage</h2>`);
})