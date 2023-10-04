// To connect with your mongoDB database
const mongoose = require("mongodb");
import dotenv from "dotenv";
dotenv.config();

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
app.get("/", (req, resp) => {
  // You can check backend is working or not by
  // entering http://localhost:5000
  // If you see App is working means
  // backend working properly
  resp.send("App is Working");
});

app.post("/register", async (req, resp) => {
  // (req.body);
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
app.listen(5000);
