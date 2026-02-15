
import './App.css'
import College from './College';
import User from './User';
import Wrapper from './Wrapper';


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
      <Wrapper color="orange">
        <h1>hehe1</h1>
      </Wrapper>    
      <Wrapper color="yellow">
        <h1>hehe2</h1>
      </Wrapper>    
      <Wrapper>
        <h1>hehe3</h1>
      </Wrapper>    
      </div>

  )
}

export default App
