
import './App.css'
import College from './College';
import User from './User';
import Wrapper from './Wrapper';
import Skills from './Skills';
import Map from './map';


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

      // const [name, setname] = useState("");
      // const [password, setpassword] = useState("");
      // const [email, setemail] = useState("");

      const UserArray = [{
        name: "rahul",
        age: 27,
        email: "test@gmail.com"
      },
    {name: "virat",
        age: 7,
        email: "vir@gmail.com"},
      {name: "SACHIN",
        age: 237,
        email: "scah@gmail.com"},
      {name: "rohit",
        age: 2,
        email: "rohit@gmail.com"}]
      
  return (

<div>
    {UserArray.map((e)=>(
      <Map usrrrer={e}/>
    ))}
    </div> 

  )
}

export default App
