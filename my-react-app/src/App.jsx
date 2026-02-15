
import './App.css'
import College from './College';
import User from './User';


function App() {
let name = "rahul";
let age = 27;
let email = "test@gmail.com";

let userObj = {
  name : "rahul",
  age :27,
  email : "test@gmail.com"
}
let userObj1 = {
  name : "virat",
  age :27,
  email : "test@gmail.com"
}
let userObj2 = {
  name : "rmishral",
  age :27,
  email : "test@gmail.com"
}


const collegearray =['iit','nit','iiiiit','hdhdhd'];
console.log(collegearray);
  return (

    <div>
      props
      <College name={collegearray}/>
    </div>

  )
}

export default App
