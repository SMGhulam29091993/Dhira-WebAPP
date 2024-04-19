const express = require("express");
const router = express();

router.get("/test",(req,res)=>{
    res.status(200).send({message : "The Backend is working!!"})
} );

module.exports = router;