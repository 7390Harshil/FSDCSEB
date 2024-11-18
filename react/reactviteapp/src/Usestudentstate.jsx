import React, { useState } from 'react'

function Usestudentstate(){
    const[count , setCount] = useState(20);

    function doIncrement()
    {
      setCount(count+1);
    }

    function dodecrement()
    {
      setCount(count - 1);
    }

    function reset()
    {
      setCount(0);
    }
  return (
    <>
    <div style = {{color : "red" , border:'2px solid red' , width:'400px' , 
      height:'480px' , marginLeft:'35%', backgroundColor : 'palegoldenrod' ,
       color:'red' , fontSize:'100px' , paddingTop: '30px' , paddingLeft:'90px'}}>{count}
       <div>
        <button id='btn' onClick={doIncrement} style={{backgroundColor:'red' , color:'white' , marginLeft:'30%',
              width:'100px' , height:'70px' , border:'none' , borderRadius:'5px'}}>Increment</button>
        <button id='btn' onClick={dodecrement} style={{backgroundColor:'red' , color:'white' , marginLeft:'30%',
              width:'100px' , height:'70px' , border:'none' , borderRadius:'5px'}}>Decrement</button>
        <button id='btn' onClick={reset} style={{backgroundColor:'red' , color:'white' , marginLeft:'30%',
              width:'100px' , height:'70px' , border:'none' , borderRadius:'5px'}}>Reset</button>
       </div>
       </div>
    </>
  )
}
export default Usestudentstate;