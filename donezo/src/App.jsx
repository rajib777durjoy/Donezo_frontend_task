import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Navbar from './pages/Navbar/Navbar';
import Login from './pages/Auth/Login';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}>
        <Route path='Login' element={<Login></Login>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
