import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowEmployeeData = () => {

    const [employeeData, setEmployeeData] = useState([]);
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState("");

    const fetchData = async ()=>{
        try {
            const res = await axios.get("http://localhost:8000/api/v1/user/get-data");
            const data = res.data;
            console.log(res);
            if (!data.success){
                setMessageError(data.message);
                return;
            }
            setEmployeeData(data.employee);
            setMessage(data.message);
            setTimeout(()=>{
                setMessage("");
                setMessageError("")
            },2000)
        } catch (error) {
            console.log(`Error in fetching employee data ${error}`);
        }
    }

    useEffect(()=>{
        fetchData();
    }, [])

    console.log(employeeData);
  return (
    <>
        <div className='mx-auto my-3 flex flex-col max-w-xl gap-4 '>
            <h1 className='text-3xl font-semibold text-orange-600 text-center'>Employee Table</h1>
            {message?<p className='text-green-800 text-center'>{message}</p>
                :messageError?<p className='text-red-800 text-center'>{messageError}</p>:""}
            <table className='border-2 border-black self-center '>
                <thead>
                    <tr>
                        <th className='p-1 min-w-36 border-2 border-slate-800'>SL No.</th>
                        <th className='p-1 min-w-48 border-2 border-slate-800'>Name</th>
                        <th className='p-1 min-w-48 border-2 border-slate-800'>Salary</th>
                        <th className='p-1 min-w-48 border-2 border-slate-800'>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.map((employee,i)=>(
                        <tr key={i}>
                            <td className='text-center p-1 min-w-36 border-2 border-slate-800'>{i+1}</td>
                            <td className='text-center p-1 min-w-48 border-2 border-slate-800'>{employee.name}</td>
                            <td className='text-center p-1 min-w-48 border-2 border-slate-800'>{employee.salary}</td>
                            <td className='text-center p-1 min-w-48 border-2 border-slate-800'>{employee.department}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        

    </>
  )
}

export default ShowEmployeeData