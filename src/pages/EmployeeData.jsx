import React, { useState } from 'react'

const EmployeeData = () => {
    const [formData, setFormData] = useState({name:"", salary:"", department: ""});

    const handleChange = ()=>{

    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <>
        <div className='flex flex-col gap-2 max-w-6xl mx-auto my-2 items-center'>
            <h1 className='text-center font-semibold text-orange-600 text-2xl mb-4'>Add Employee Data</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input placeholder='Enter Employee name...' className='border-2 p-3 rounded-lg text-black'
                    value={formData.name} onChange={handleChange} id="name"   />
                <input placeholder='Enter Employee Salary...' className='border-2 p-3 rounded-lg text-black'
                    value={formData.salary} onChange={handleChange} id="name"   />
                <input placeholder='Enter Employee Department...' className='border-2 p-3 rounded-lg text-black'
                    value={formData.name} onChange={handleChange} id="name"   />
                <button className='bg-blue-600 p-3 rounded text-white uppercase'>Submit</button>
            </form>

        </div>
        
    </>
  )
}

export default EmployeeData