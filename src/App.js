import logo from './logo.svg';
// import './Hai.css';
// import Hello from './Component/Hello'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import Card from './Component/Project1';
// import Project1 from './Component/Project1';
import Proj2 from './Component/Proj2';
import image1 from '../src/Component/images/kalpana.jpeg'
import image2 from '../src/Component/images/rithu.jpeg'
import image3 from '../src/Component/images/th.jpeg'
import { useState } from 'react';


function App() {


  const [name,setName]  =useState("")
  const [age,setAge] =useState("")
    function handlessubmit(e){
        e.preventDefault()
    let data = {
      name:{name},
      age:{age}
    }
    console.log(data);
    }
  
  // const[age, setAge]=useState("")
//   const[name,setName]=useState("")
//  console.log(age);
//  console.log(name);
  // const [number, setNumber]=useState(0)
  // console.log(number);



  const data = [

    {
      id: 1,
      name: "Kalpana Chawla",
      img : image1,
      description:"Kalpana Chawla was an indian born American astronautand aerospace engineer who was the first women of india originto fly to space . she first flew on space shuttle columbia in1997 as a mission specialist and primary robotic arm operator aboard STS-87.Kalpana Chawla was an indian born American astronautand aerospace engineer who was the first women of india originto fly to space Kalpana Chawla was an indian born American astronautand aerospace engineer who was the first women of india originto fly to space"
    },

    {
      id: 2,
      name: "Ritu Karidhal",
      img : image2,
      description: "Ritu Karidhal Srivastava is an Indian scientist and aerospace engineer working in the Indian Space Research Organisation(ISRO).She was a Deputy Operations Director to India's Mars orbitalmission, Mangalyaan.She has been referred to as one of the many Rocket Womem of India.Giving tribute to her excellence in Mangalayaan mission, a Bollywood film Mission Mangal was createdwhere Indian actress Vidya Balan did her role."

    },

    {
      id:3,
      name:" Sirisha Bandla",
      img:image3,
      description:"Sirisha Bandla is an Indian-American aeronautical engineer and space tourist.[2] She is the Vice President of Government Affairs and Research Operations for Virgin Galactic.[3] She flew on the Virgin Galactic Unity 22 mission which made her the second India-born woman to go to space and the fourth person of Indian descent ever to go past the line of space after Rakesh Sharma, Kalpana Chawla and Sunita Williams"
    }

    // {
    //   id:4,
    //   name:"Reetha Mathew",
    //   img:"https://th.bing.com/th/id/OIP.8eJNMEsDP4uYuV4dl--i9gHaE8?w=356&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    // },

    // {
    //   id:5,
    //   name:"Reetha Mathew",
    //   img:"https://th.bing.com/th/id/OIP.8eJNMEsDP4uYuV4dl--i9gHaE8?w=356&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    // },

    // {
    //   id:6,
    //   name:"Reetha Mathew",
    //   img:"https://th.bing.com/th/id/OIP.8eJNMEsDP4uYuV4dl--i9gHaE8?w=356&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    // }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <Button>click here</Button>
       <Project1 data={data}/>
       <Proj2 data={data} 
       */}
       { <div>
        <form onSubmit={handlessubmit} action="">
        <label htmlFor="">name</label> 
        <input type="text"
        onChange={(e)=>setName(e.target.value)}
        />""
        <label>age</label>
        <input type="text"
        onChange={(e)=>setAge(e.target.value)}></input>
        <input type="submit"/>
        </form>

    </div>
    }
    {/* <button onClick={()=>setNumber(number+1)}>increment</button>
    <button onClick={()=>setNumber(number-1)}>decrement</button>
    {number}
        */}
       
    </div>
   

  );
}

export default App;
