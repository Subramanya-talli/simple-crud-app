const express = require("express");
const app = express();
const Product = require('./models/product.model.js');
const mongoose = require("mongoose")
const productRoute = require('./routes/product.route.js')

//middlewere
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send("hello from Node APi Server")
})


mongoose.connect('mongodb+srv://subramanyatalli:ybtG6JVwFGcUL3cV@simplecrud.mxdbgnp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Simplecrud')
    .then(() => {
        console.log("Connected to database");
        app.listen(3000, () => {
            console.log("Server is running on port 3000")
        });
    })
    .catch(() => {
        console.log("connection failed!");
    });


