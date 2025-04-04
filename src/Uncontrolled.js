import React from 'react'
import { useRef } from 'react'

const Uncontrolled = () => {
    let inputref1=useRef()
    let inputref2=useRef()

    function handlesubmit(e){
        e.preventDefault()
        console.log("first field value",inputref1.current.value);
        console.log("second filed value",inputref2.current.value)
      let a=  document.getElementById("abc").value;
      console.log("third value",a)
    }
  return (
    <div style={{textAlign:"center"}}>
        <form onSubmit={handlesubmit}>
          first  <input type="text" ref={inputref1} /><br></br>
          second  <input type="text" ref={inputref2}></input><br></br>
          third<input type="text" id="abc"></input><br></br>
            <button>Submit</button>
        </form>
      
    </div>
  )
}

export default Uncontrolled
