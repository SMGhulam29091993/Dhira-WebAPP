import React, { useState } from 'react';
import axios from "axios";

const EmployeeData = () => {
    const [formData, setFormData] = useState({name:"", salary:"", department: ""});
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState("");

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        })
    }
    console.log(formData);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/v1/user/create-data",formData, 
                {headers:{
                    "Content-Type": "application/json"
                }
            })
            const data = res.data;
            if (!data.success){
                setMessageError(data.message);
                return
            }
            setMessage(data.message);
            setTimeout(()=>{
                setMessage("");
                setMessageError("");
            },2000);
        } catch (error) {
            console.log(`Error in creating sending employee data for creation ${error}`);
        }
    }
  return (
    <>
        <div className='flex flex-col gap-2 max-w-2xl mx-auto my-2 p-3'>
            <h1 className='text-center font-semibold text-orange-600 text-2xl mb-4'>Add Employee Data</h1>
            {message?<p className='text-green-800 text-center'>{message}</p>
                :messageError?<p className='text-red-800 text-center'>{messageError}</p>:""}
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input type='text' placeholder='Enter Employee name...' className='border-2 p-3 rounded-lg text-black'
                    value={formData.name} onChange={handleChange} id="name"   />

                <input type='text' placeholder='Enter Employee Salary...' className='border-2 p-3 rounded-lg text-black'
                    value={formData.salary} onChange={handleChange} id="salary"   />

                <input type='text' placeholder='Enter Employee Department...' className='border-2 p-3 rounded-lg text-black'
                    value={formData.department} onChange={handleChange} id="department"   />
                <button className='bg-blue-600 p-3 rounded text-white uppercase'>Submit</button>
            </form>

        </div>
        
    </>
  )
}

export default EmployeeData