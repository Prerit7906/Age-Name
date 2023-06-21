import React from "react";
import './ErrorMssg.css';
const ErrorMssg=(props)=>{
    const okayHandler=()=>{
        document.getElementById('id1').style.display = 'none';
    };
    return <div id="id1" className="error-box">
        <h4>Invalid input</h4>
        <p id="mssg">{props.mssg}</p>
        <button onClick={okayHandler} type="submit">Okay</button>
    </div>
}
export default ErrorMssg;