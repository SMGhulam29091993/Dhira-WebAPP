import React, { useState } from 'react';
import axios from 'axios';

const ShowEmployeeData = () => {

    const [employeeData, setEmployeeData] = useState({});
    const [message, setMessage] = useState("");

    const fetchData = async ()=>{
        try {
            const res = await axios.get("http://localhost:8000/api/v1/user/get-data");
            const data = res.data;
            if (!data.success){
                setMessage(data.message);
                return;
            }
            setEmployeeData(data.employee);
            setMessage(data.message);
        } catch (error) {
            console.log(`Error in fetching employee data ${error}`);
        }
    }
  return (
    <>
        <div className='mx-auto my-3 flex flex-col max-w-xl gap-4 '>
            <h1 className='text-3xl font-semibold text-orange-600 text-center'>Employee Table</h1>
            <table className='border-2 border-black '>
                <thead>
                    <tr>
                        <th className='p-1 min-w-36 border-2 border-slate-800'>SL No.</th>
                        <th className='p-1 min-w-48 border-2 border-slate-800'>Name</th>
                        <th className='p-1 min-w-48 border-2 border-slate-800'>Salary</th>
                        <th className='p-1 min-w-48 border-2 border-slate-800'>Department</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
        

    </>
  )
}

export default ShowEmployeeData