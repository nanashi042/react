import React , {useState} from "react";

export default function TextForm(props) {
    const changeToUpCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText)

        // setText("hoollahh")
    }
    const changeToLoCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText)

        // setText("hoollahh")
    }
    const fetchAllEmail = ()=>{
      
       // function for get email id
        let email = " " 
        email =  text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
        setText( email + "" )
    }
    const handelOnChange = (event)=>{
        // setText("hoollahh")
        console.log("changed text")
        setText(event.target.value)


    }
    const [text , setText] = useState("")
  return (
    <>
    <div className="container">
      <div className="mb-3">
        <h1 className="heading my-3">{props.heading}</h1>
        {/* <label htmlFor="myBox" className="form-label ">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-danger mx-1 my-1" onClick={changeToUpCase}>Conver To Upper Case</button>
      <button className="btn btn-danger  mx-1 my-1" onClick={changeToLoCase}>Conver To Lower Case</button>
      <button className="btn btn-danger  mx-1 my-1" onClick={fetchAllEmail}>Fetch All Emails</button>
    </div>
    <div className="container my-5">
        <h1>Your Text Summary</h1>
        <p>{text.trim().length } characters</p>
        <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words</p>
    </div>

    <div className="container">
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
}

