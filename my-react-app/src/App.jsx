import './App.css'
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
  return (

    <div>
      props
      <User info={userObj} />
      <User info={userObj1} />
      <User info={userObj2} />
    </div>

  )
}

export default App
