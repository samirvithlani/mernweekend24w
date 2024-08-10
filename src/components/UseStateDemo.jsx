import React, { useState } from 'react'

export const UseStateDemo = () => {
    //var count = 0;
    //[count ->variable,setCount-->function :use : to update value of count variable..] = useState(0-->initial value of count variable)
    const [count,setCount] = useState(0)
    //const [user, setuser] = useState({})
    //const [user, setuser] = useState([])
    const increseCount = ()=>{
        console.log("increseCount");
        //count++;
        setCount(count+1);
        console.log("after count ++",count);
    }
  return (
    <div>
            <h1>{count}</h1>
            {/* <button onClick={increseCount}>increse</button> */}
            <button onClick={()=>{increseCount()}}>increse</button>
    </div>
  )
}
