// import logo from './logo.svg';
import React from 'react'

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>

   <Navbar title= "TextUtils"/>
   {/* <div className="container">

   <TextForm heading = "Enter Your Text Here"/>
   </div> */}
    <About/>
    </>
  );
}

export default App;
