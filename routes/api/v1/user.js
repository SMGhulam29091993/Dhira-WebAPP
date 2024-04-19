const express = require("express");
const router = express();

const employeeController = require("../../../controllers/employeeController.js");

router.get("/test",(req,res)=>{
    res.status(200).send({message : "The Backend is working!!"})
} );
router.post("/create-data", employeeController.createData);
router.get("/get-data", employeeController.getData);

module.exports = router;