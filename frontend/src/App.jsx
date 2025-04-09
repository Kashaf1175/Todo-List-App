import { useState } from 'react'
import Navbar from "./components/Navbar.jsx"
import HomePage from "./components/HomePage.jsx" 
import AboutUs from "./components/AboutUs.jsx"
import Todo from "./components/Todo.jsx"  
import Update from './components/Update';
import Signin from "./components/Signin.jsx"
import Signup from "./components/Signup.jsx"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from './store/index.js';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    }
  }, [])

  

  return (
    <>
     <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={ <Signin /> } />
          <Route path="/update/:id" element={<Update />} />
          
        </Routes>
      </Router>
      
    </div>
    </>
  )
}

export default App;
