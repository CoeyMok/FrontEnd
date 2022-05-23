import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Login from './pages/login';
import Homepage from './pages/homepage'
<<<<<<< HEAD
import SignupForm from './pages/SignupForm'
=======
import Add from './pages/add'

>>>>>>> 9c478da758c2129bb20b4bc7ecbcc353a017caf9
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
         <Route path="/" element={<Homepage/>} />
         <Route path="/login" element={<Login/>}/>
<<<<<<< HEAD
         <Route path="/signup" element={<SignupForm />}/>
=======
         <Route path="/add" element={<Add/>}/>
>>>>>>> 9c478da758c2129bb20b4bc7ecbcc353a017caf9
    </Routes>
  </BrowserRouter>
);
