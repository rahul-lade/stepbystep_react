import './App.css'
import React, { useState } from 'react'
import User from './User';


function App() {
  const [count,setcount] = useState(0);
  
  return (
    <>
    <h1>{count}</h1>
 <button onClick={()=>setcount(count+1)}>increase</button>
 {count==0?<h1>condition 0</h1>
 :count==1? <h1>condition 1</h1> 
 :count==2? <h1>condition 2</h1> 
 :count==3? <h1>condition 3</h1> 
 :count==4? <h1>condition 4</h1> 
 :count==5? <h1>condition 5</h1>
 : <h1>other conditions</h1> }

     </>
  )
}

export default App
