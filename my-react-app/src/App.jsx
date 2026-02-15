import './App.css'
import React, { useState } from 'react'
import User from './User';


function App() {
  const [display,setdisplay] = useState(true);
 
  return (
    <>
 <button onClick={()=>setdisplay(!display)}>hide</button>
 {display && <h1><User/></h1> }
  {display && <h1>we are learning state</h1>}

     </>
  )
}

export default App
