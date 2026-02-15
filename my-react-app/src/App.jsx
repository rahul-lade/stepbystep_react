import './App.css'
import User from './User';


function App() {

let name = "rahul";
let age = 27;
let email = "test@gmail.com";
  return (

    <div>
      props
      <User name={name} age={age} email={email} />
    </div>

  )
}

export default App
