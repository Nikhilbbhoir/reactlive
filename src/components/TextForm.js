import React,{useState} from 'react'

export default function TextForm(props) {
   const handleUpClick = ()=>{
    // console.log("Uppercase was clicked : " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
   }
   const handleDownClick = ()=>{
    // console.log("Uppercase was clicked : " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
    
}
const handleCapClick = ()=>{
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase()+el.slice(1)).join(" ");
    setText(newText);
    props.showAlert("Capitalized Successfully","success");
}
const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied","success");
}
const handleExtraSpaces = ()=>{
    let newText = text.split(/ +/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed","success");
}

   const handleClearClick = ()=>{
    setText('');
    props.showAlert("Cleared!","warning");
   }
   const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
   }
   
    const[text,setText]= useState('');
    // setText("nikhil");
    return (
       <> 
       <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(33 37 41)':'white',color: props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCapClick}>Capitalize</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Spaces</button>
            <button className="btn btn-warning mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter(word => word !=='').length} words and {text.replace(/ /g,"").length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to Preview"}</p>
        </div>
        </>
    )
}
