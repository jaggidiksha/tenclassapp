import React from 'react';
import { useState } from 'react';

const Form = () => {
    const [user,setuser]=useState("")
    const[pass,setpass]=useState("")
    const[usererr,setusererr]=useState(false)
    const[passerr,setpasserr]=useState(false)


    function loginhandle(e){
        e.preventDefault()
   if(user.length<=3 || pass.length<=3){
    alert("please fill correctly")
   }else{
    alert("all fine")
   }

    }


    function userhandler(e){
      let item=  e.target.value
      if(item.length<=3){
        setusererr(true)
      }else{
        setusererr(false)
      }

      setuser(item)
    }
  return (
    <div  style={{textAlign:"center"}}>
      <form   onSubmit={loginhandle}>
        <label> Name:</label>
        <input type="text"  value={user}   onChange={userhandler}></input>{usererr?<span>User not valid</span>:""}
        <br></br>
        <label>Password</label>
        <input type="text"  value={pass}></input><br></br>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Form
