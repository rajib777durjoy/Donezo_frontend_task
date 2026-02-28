import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Login from './pages/Auth/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import ProtectRoute from './pages/ProtectRoute/ProtectRoute';
import { useNavigate } from "react-router";
const App = () => {
  let navigate = useNavigate();
  useEffect(()=>{
    const user=localStorage.getItem('userData');
    if(!user){
      return navigate('/login')
    }
  })
  return (
    <Routes>
      <Route path='Login' element={<Login></Login>}></Route>
      <Route
        path="/"
        element={<ProtectRoute><Dashboard /></ProtectRoute>
        }
      />
    </Routes>
  );
};

export default App;
