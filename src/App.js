// import logo from './logo.svg';
import React, { useState } from 'react'


import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import userEvent from '@testing-library/user-event';

function App() {
  const [mode , changemode] = useState("light")
  const [alert,setAlert] = useState(null)

  const showAlert = (message , type)=>{
    setAlert({
      message : message,
      type : type
    })
  }
  const toggleMode = ()=>{
    if (mode === "light"){
      changemode("dark");
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled","success")
    }else{
      changemode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>

    
   <Navbar title= "TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
   <div className="container">
   <TextForm heading = "Enter Your Text Here" mode ={mode}/>
   </div>
    {/* <About/> */}
    </>
  );
}

export default App;
