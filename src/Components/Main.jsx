import React, { useState } from "react";

function Main() {
  const [value, setValue] = useState("");
  const [check, setcheck] = useState(false)
  const [style, setstyle] = useState(
    {color:'black',backgroundColor:"white"}
  )
  const UpperCase = (e) => {
    e.preventDefault();
    let text = value.toUpperCase();
    setValue(text);
  };

  const LowerCase = (e) => {
    e.preventDefault();
    let text = value.toLowerCase();
    setValue(text);
  };
  const myStyle = ()=>{
    if(style.color==="black"){
      setstyle( {color:'white',backgroundColor:"black"})
    }
    else{
      setstyle( {color:'black',backgroundColor:"white"})
    }
    setcheck(!check)
  }
  return (
    <div className="min-vh-100" style={style} >
      <div className="container d-flex justify-content-end ">
        <div className="form-check form-switch ">
          <label className="form-check-label" for="flexSwitchCheckDefault">Default</label>
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={check} onChange={myStyle}/>
          
        </div>
      </div>
      <div className="container my-4">
        <textarea style={style}
          name="text"
          cols="30"
          rows="10"
          className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
        <button className="btn btn-primary m-3" onClick={UpperCase}>
          UpperCase
        </button>
        <button className="btn btn-primary m-3" onClick={LowerCase}>
          LowerCase
        </button>
        <button className="btn btn-warning m-3" onClick={() => setValue("")}>
          Clear
        </button>
      </div>
       <div>
        <h5><b>Text Info: <br /></b></h5>
        <p><b>Words:{value?value.split(" ").length:0} <br />Characters: {value.length}</b></p>
        {/* <p>Your Text has {value.length} char and {value.split(" ").length-1}</p> */}
       </div>
    </div>
  );
}

export default Main;
