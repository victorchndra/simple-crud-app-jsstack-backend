const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express()

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes (Product)
app.use("/api/products", productRoute);

// get the response
app.get('/', (req, res) => {
    res.send('Hello from Node API Server');
});

// Connect the mongodb with mongoose
mongoose.connect('mongodb+srv://victorchandra0911:Compaq420@cluster0.qxho9dt.mongodb.net/Project-0?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Connected to database!');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => console.log("Connection failed!"));