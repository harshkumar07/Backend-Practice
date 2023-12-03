const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("You are on the server");
});

app.post('/api/cars', (req, res) => {
    console.log(req.body);
    const { Car, Brand } = req.body;
    console.log(Car);
    console.log(Brand);
    res.send("Car registered!");
});

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});

mongoose.connect("mongodb://127.0.0.1:27017/myDatabase",{
})
.then(() => {
    console.log("Connected successfully ");
})
.catch((error) => {
    console.error("Error",error);
});



