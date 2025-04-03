import React from 'react'
import { useState } from 'react';

const App = () => {
  return (
    <div  style={{textAlign:"center"}}>
      <h1>High order components</h1>
      <Hocblue cmp={Counter}/>
      <Hocred cmp={Counter}/>
      <Hocgreen cmp={Counter}/>
      {/* <Counter/> */}
    </div>
  )
}

export default App;

function Hocred(props){
return (
  <>
  <h1 style={{backgroundColor:"red"}}><props.cmp/></h1>
  </>
)
}
function Hocgreen(props){
  return (
    <>
    <h1 style={{backgroundColor:"green"}}><props.cmp/></h1>
    </>
  )
}
function Hocblue(props){
  return(
    <>
    <h1  style={{backgroundColor:"blue"}}><props.cmp/></h1>
    </>
  )
}





function Counter (){
  const[count,setcount]=useState(0)
  return(
    <>
    <div  style={{textAlign:"center"}}>
      <h1>count:{count}</h1>
      <button onClick={()=>setcount(count+1)}>update count</button>
    </div>
    </>
  )
}
