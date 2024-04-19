const Employee = require("../models/employee.js");

module.exports.createData = async (req,res,next)=>{
    try {
        const {name, salary, department} = req.body;
        const employee = await Employee.create({name, salary, department});
        if(!employee){
            return res.status(401).send({message : "Unable to create the employee data", success: false})
        }
        res.status(200).send({message: "Employee Data Created !!", success : true});
    } catch (error) {
        next(error);
    }
};


module.exports.getData = async (req,res,next)=>{
    try {
        const employee = await Employee.find();
        if(!employee){
            return res.status(401).send({message: "No Employee Data Found !!", success : false});
        }
        res.status(200).send({message: "Here are the employee details!!", success : true, employee});
    } catch (error) {
        next(error);
    }
}