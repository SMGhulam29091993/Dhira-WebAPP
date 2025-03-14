import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/Header';

const EmployeeData = lazy(()=>import("./pages/EmployeeData"));
const ShowEmployeeData = lazy(()=>import("./pages/ShowEmployeeData"));


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<EmployeeData/>} />
          <Route path="/employee-table" element={<ShowEmployeeData/>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App