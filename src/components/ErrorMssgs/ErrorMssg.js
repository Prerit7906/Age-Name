import React from "react";
import './ErrorMssg.css';
const ErrorMssg=(props)=>{
    const okayHandler=()=>{
        document.getElementById('id1').close();
    };
    return <div>
    <dialog id="id1" className="error-box">
    <h4>Invalid input</h4>
    <p id="mssg">{props.mssg}</p>
    <button onClick={okayHandler} type="submit">Okay</button>
    </dialog>
    </div>
}
export default ErrorMssg;