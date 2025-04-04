import React from 'react';
import { useState } from 'react';
import Uncontrolled from './Uncontrolled';
import Form from './Form';

const App = () => {


  const[val,setval]=useState("hello")
  const [item,setitem]=useState("hii")
  return (
    <div>
    <Form/>
  
      {/* <Uncontrolled/> */}
     first field <input type="text"   value={val}  onChange={(e)=>setval(e.target.value)}></input><br></br>
    second field<input type="text"  value={item}  onChange={(e)=>setitem(e.target.value)}></input><br></br>
  
      <h1>{val}</h1>
      <h1>{item}</h1>
    </div>
  )
}

export default App

























// import React from 'react'
// import { useState } from 'react';

// const App = () => {
//   return (
//     <div  style={{textAlign:"center"}}>
//       <h1>High order components</h1>
//       <Hocblue cmp={Counter}/>
//       <Hocred cmp={Counter}/>
//       <Hocgreen cmp={Counter}/>
//       {/* <Counter/> */}
//     </div>
//   )
// }

// export default App;

// function Hocred(props){
// return (
//   <>
//   <h1 style={{backgroundColor:"red"}}><props.cmp/></h1>
//   </>
// )
// }
// function Hocgreen(props){
//   return (
//     <>
//     <h1 style={{backgroundColor:"green"}}><props.cmp/></h1>
//     </>
//   )
// }
// function Hocblue(props){
//   return(
//     <>
//     <h1  style={{backgroundColor:"blue"}}><props.cmp/></h1>
//     </>
//   )
// }





// function Counter (){
//   const[count,setcount]=useState(0)
//   return(
//     <>
//     <div  style={{textAlign:"center"}}>
//       <h1>count:{count}</h1>
//       <button onClick={()=>setcount(count+1)}>update count</button>
//     </div>
//     </>
//   )
// }
