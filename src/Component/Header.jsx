import React, { startTransition } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
  return (
    <>
        <header className='bg-slate-500 shadow-md'>
            <div className='flex items-center justify-between p-2 gap-4'>
                <h3 className='text-yellow-400 uppercase italic font-semibold ml-2 text-sm md:text-lg'>Dhira</h3>
              
                <ul className='flex gap-4 mr-4 font-semibold text-white cursor-pointer'>
                    <li onClick={()=>startTransition(()=>navigate("/"))}>Home</li>
                    <li onClick={()=>startTransition(()=>navigate("/employee-table"))}>Table</li>
                </ul>
            </div>
            

        </header>
    </>
  )
}

export default Header;