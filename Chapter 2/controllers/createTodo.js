const Todo = require("../models/Todo");

exports.createTodo = async(req,res) =>{
    try{
        // take data from post man
        const {title , description} = req.body;
        // send data to db
        const response = await Todo.create({title,description});
        // send response that data is created
        res.status(200).json({
            success: true,
            data: response,
            message:'Entry Created Successfully'
        })

    }
    catch(error){
        console.error("Error",error);
        res.status(500).json({
            success: false,
            data:"Error Ocurred",
            message:'Internal Error'
        })
    }
}
