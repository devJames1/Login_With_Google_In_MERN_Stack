import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from "axios";

import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/SIgnup";
import './App.css'


function App() {

  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/auth/login/success`;
      //withCredential to true because cors was set credentials: true in backend
      const { data } = await axios.get(url, { withCredentials: true });
      // console.log(data);
      setUser(data.user._json);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, [])
  // console.log(user);

  return (
    <div className='container'>
      <Routes>

        <Route path='/' element={user ? <Home user={user} /> : <Navigate to="/login" />} />

        <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />

        <Route path='/signup' element={user ? <Navigate to="/" /> : <Signup />} />

      </Routes>
    </div>

  )
}

export default App
