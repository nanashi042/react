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
    const handelOnChange = (event)=>{
        // setText("hoollahh")
        console.log("changed text")
        setText(event.target.value)
    }
    const [text , setText] = useState("Enter Text Here")
  return (
    <>
    <div className="container">
      <div className="mb-3">
        <h1 className="heading my-3">{props.heading}</h1>
        {/* <label htmlFor="myBox" className="form-label ">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="18"></textarea>
      </div>
      <button className="btn btn-primary" onClick={changeToUpCase}>Conver To Upper Case</button>
      <button className="btn btn-primary  mx-5" onClick={changeToLoCase}>Conver To Lower Case</button>
    </div>
    <div className="container my-5">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  );
}

