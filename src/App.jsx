import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const EmployeeData = lazy(()=>import("./pages/EmployeeData"));



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmployeeData/>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App