
import './App.css';
import QRCode from "react-qr-code";
import React,{useState} from 'react';
function App() {
  const [text,setText]=useState("");
  return (
    <div className="App" style={{boxSizing:"border-box",margin:"0px",margin:"30px auto"}}>
      <h1>QR code generator</h1>
      <QRCode value={text}/>
      <div>
        <p>Enter the text</p>
        <input type="text" value={text} placeholder='text...' onChange={(e)=>setText(e.target.value)}/>
        
      </div>
    </div>
  );
}

export default App;
