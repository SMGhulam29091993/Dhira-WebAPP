const express = require("express");
const PORT = 8000;
const cors = require("cors");

const app = express();

const db = require("./config/mongoose.js");

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use("/", require("./routes"))

app.listen(PORT, ()=>{
    console.log(`The server is up and running on ${PORT}`);
})