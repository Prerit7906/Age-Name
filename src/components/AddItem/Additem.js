import React, { useState } from 'react'
import './Additem.css'
function Additem(props) {
  const [name,setName]=useState('');
  const [age,setAge]=useState('');
 function namechangehandler(event) {
   setName(event.target.value);
 }
 function agechangehandler(event) {
   setAge(event.target.value);
 }
 function submitHandler(event){
  event.preventDefault();
  var dialog='';
  if(name.trim().length===0 | age==='') {
    // var mssg=;
    dialog=document.getElementById('id1');
    dialog.showModal();
    props.mssg("Insufficient Data");
    return;
  }
  if(age<0) {
    // var mssg=;
    dialog=document.getElementById('id1');
    dialog.showModal();
    props.mssg("Negative value");
    return;
}
  const updatedDetails=[...props.details];
  updatedDetails.unshift({Name:name,Age:age});
  props.onAddDetails(updatedDetails);
 }
  return (
    <div className='Additem'>
      <div className='form-control'>
        <form onSubmit={submitHandler} className='form-main'>
          <label className='form-inputs'>UserName</label>
          <input onChange={namechangehandler} className='form-inputs' type='text'></input>
          <label className='form-inputs'>Age(Years)</label>
          <input onChange={agechangehandler} className='form-inputs' type='number'></input>
          <input className='submitbtn' type='submit' value='submit'></input>
        </form>
      </div>
    </div>
  )
}

export default Additem;