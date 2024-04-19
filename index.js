const express = require("express");
const PORT = 8000;

const app = express();

const db = require("./config/mongoose.js");

app.use("/", require("./routes"))

app.listen(PORT, ()=>{
    console.log(`The server is up and running on ${PORT}`);
})