
import { useState } from 'react';
import './App.css'
import College from './College';
import User from './User';
import Wrapper from './Wrapper';


function App() {
  // let name = "rahul";
  // let age = 27;
  // let email = "test@gmail.com";

  // let userObj = {
  //   name: "rahul",
  //   age: 27,
  //   email: "test@gmail.com"
  // }
  // let userObj1 = {
  //   name: "virat",
  //   age: 27,
  //   email: "test@gmail.com"
  // }
  // let userObj2 = {
  //   name: "rmishral",
  //   age: 27,
  //   email: "test@gmail.com"
  // }


  // const collegearray = ['iit', 'nit', 'iiiiit', 'hdhdhd'];
  // console.log(collegearray);


const [valu, setValu] = useState("rahul");
  return (

    <div>
    <h1>getting the input values</h1>
   <input type="text" value={valu} onChange={(e)=>{setValu(e.target.value)}}  placeholder='hey input' />
   <button onClick={()=>{setValu("")}}>clear</button>
    <h1 >{valu}</h1>

    </div>

  )
}

export default App
