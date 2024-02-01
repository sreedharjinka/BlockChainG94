import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
// import { ContractContext } from './context/ContractContext';
import { Navigate } from 'react-router-dom';
// import { createContext, useContext, useState } from 'react';
import Login from './pages/login/login';
import Home from './pages/home';
import Selling from './pages/Selling'

import './App.css'
import Mainform from './pages/addprod/Mainform';


import Profile from './pages/profile/profile'

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!user?<Login/>:<Navigate to="/home"/>}/>
          <Route path="/home" element={user?<Home/>:<Navigate to="/"/>}/>
          <Route path="/sell" element={<Mainform/>}/>
          <Route path="/dashboard" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
