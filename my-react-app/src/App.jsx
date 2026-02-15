
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

const [name, setname] = useState("");
const [password, setpassword] = useState("");
const [email, setemail] = useState("");
  return (

    <div>
    <h1>hi this is controlled component</h1>
    <form action="">
      <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='name...'/>
      <h3>{name}</h3>
      <br />
      <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='password...'/>
      <h3>{password}</h3>
      <br />
      <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='email...'/>
      <h3>{email}</h3>
      <br />
      <button onClick={()=>{(setname('')),setemail(''),setpassword('')} }>clear</button>
    </form>
    <button onClick={()=>{console.log(name,password,email)}}>submit</button>

    </div>

  )
}

export default App
