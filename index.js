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


const uri = "mongodb+srv://75mdnazmulhasan:<password>@cluster0.4botfbx.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


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