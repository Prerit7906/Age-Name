import logo from './logo.svg';
import './App.css';
import Additem from './components/AddItem/Additem';
import Itemlist from './components/Itemlist/Itemlist';
import { useState } from 'react';
import ErrorMssg from './components/ErrorMssgs/ErrorMssg';
function App() {
  const [details,setDetails]=useState([{Name:'Prerit', Age:'19'},{Name:'Mani', Age:'17'}]);
  const addDetailsHandler =myDetails=>{
    setDetails(myDetails);
  };
  const [mssg,Setmssg]=useState('');
  function mssgHandler(mssg) {
    Setmssg(mssg);
  }
  let content=(
    <p className='No-item'>No items found!!</p>
    );
    if(details.length>0){
      content=(
        <Itemlist detail={details}/>
      );
    }
  return (
    <>
    <Additem mssg={mssgHandler} details={details} onAddDetails={addDetailsHandler}/>
    {content}
    <ErrorMssg mssg={mssg}/>
    </>
  );
}

export default App;
