import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {inc,dec} from "./action/index"
import Table from './component/ExpandableColumn';
import Accordian from "./component/Accordian"



function App() {
  const myState=useSelector((state)=>state.changenumber)
  const dispatch=useDispatch()
  return (
    <>
     <h1>Counter App using Redux</h1>
       <input type="text" value={myState}/>
      <button onClick={()=>dispatch(inc())}>Increment</button>
      <button onClick={()=>dispatch(dec())}>Decrement</button>
    <Accordian/>
    <Table/>
    </> 
  
     
 
  )
};

export default App;