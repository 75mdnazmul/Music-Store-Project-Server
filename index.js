const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 7000;

// Middleware
app.use(cors());
app.use(express.json());


const shopByCategory = require("./ShopByCategory.json")

app.get('/', (req, res)=>{
    res.send('user Manegement Server is running')
})

app.get('/shopByCategory', (req, res)=>{
    res.send(shopByCategory)
})
app.get('/shopByCategory/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    console.log(id);
    const selectedshopByCategory = shopByCategory.find(n => parseInt(n.id) === id)
    console.log(selectedshopByCategory);
    res.send(selectedshopByCategory);
})

app.listen(port, () =>{
    console.log(`Server is running on port : ${port}`);
})