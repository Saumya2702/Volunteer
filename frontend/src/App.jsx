import React from 'react'
import "./App.css"
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Donate from "./Components/Donate";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/about' element ={<About/>}/>
          <Route path='/contact' element ={<Contact/>}/>
          <Route path='/donate' element ={<Donate/>}/>
          <Route path='*' element ={<NotFound/>}/>
        </Routes>
        <Footer/>
        <ToastContainer position='top-center'/>
      </Router>
    </>
  )
}

export default App
