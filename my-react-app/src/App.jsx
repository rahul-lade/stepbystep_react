import './App.css'
import React, { useState } from 'react'


function App() {
  const [fruit,setfruit] = useState("apple");
  return (
    <>
<h1>we are learning state</h1>
<h1>{fruit}</h1>

<button onClick={()=>setfruit("banana")}>change to banana</button> 

     </>
  )
}

export default App
