const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { error } = require("console");
const app = express();
const portNumber = 5050;


app.listen(portNumber, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Server is running on port ${portNumber}... `)
    }
})