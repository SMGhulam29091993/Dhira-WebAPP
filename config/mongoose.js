const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dhira");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting with the database"));

db.once("open", ()=>{
    console.log("Connection with the database is established");
});

module.exports = db;