const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ipModel = require("./ipModel");
const app = express();
const portNumber = 5050;

mongoose.connect("mongodb+srv://Milos1988:Milos1988@ip.zaqme7u.mongodb.net/")
    .then((data) => console.log("MongoDB is connecting..."))
    .catch((error) => console.log(error));

app.use(express.json());
app.use(cors());

app.post("/api/authentication", async (req, res) => {
    console.log(req.body)
    try {
        const newIp = await ipModel.create(req.body);
        newIp.save();
        res.send("ok");
    } catch (error) {
        res.send("Error")
    }
})

app.get("/api/get-all-address", (req, res) => {
    ipModel.find({})
        .then(data => {
        res.send(data)
    })
        .catch(err => res.send(err))
})

app.delete("/api/items/:id", (req, res) => {
    const itemId = req.params.id;
  
    ipModel.deleteOne({ _id: itemId })
      .then(() => {
        res.send("User Deleted!");
      })
      .catch((error) => {
        res.status(500).send("Error");
      });
  });

app.listen(portNumber, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Server is running on port ${portNumber}... `)
    }
})