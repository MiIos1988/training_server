const mongoose = require("mongoose");

const ipSchema = new mongoose.Schema({
    ip: { type: String }
}, {
    timestamps: {
        currentTime: () => new Date().getTime() + (2 * 60 * 60 * 1000),
        timeZone: 'Europe/Belgrade'
    }
})

const ipModel = mongoose.model("address", ipSchema);
module.exports = ipModel;