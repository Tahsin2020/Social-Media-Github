// To connect with your mongoDB database
const mongoose = require("mongodb");
require("dotenv").config();
const UserRouter = require("./routes/user.js");
const ItemRouter = require("./routes/item.js");
// import { genRandomString } from "./randomfunctions";

const uri = process.env.MONGODB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new mongoose.MongoClient(uri, {
  serverApi: {
    version: mongoose.ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (e) {
    console.log(e);
    resp.send("Something Went Wrong");
  }
}
run().catch(console.dir);

// For backend and express
const express = require("express");
const app = express();
const cors = require("cors");

console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());

app.get("/", async (req, resp) => {
  var data = [];
  try {
    const myDB = client.db("test");
    const myColl = myDB.collection("todos");
    const result = await myColl.find().toArray(function (err, result) {
      if (err) throw err;
    });
    console.log(`Accessed all items.`);
    resp.send(result);
  } catch (e) {
    console.log(e);
    resp.send("Something Went Wrong");
  }
});

app.post("/register", async (req, resp) => {
  try {
    console.log(req.body);
    const myDB = client.db("test");
    const myColl = myDB.collection("todos");
    const doc = req.body;
    const result = await myColl.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } catch (e) {
    console.log(e);
    resp.send("Something Went Wrong");
  }
});

app.use("/users", UserRouter);

app.use("/items", ItemRouter);

app.listen(5000);
