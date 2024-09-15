import React, { useEffect, useState } from 'react'

export const UseEffectDemo = () => {
    //()=>{} is a callback function
    //[] is a dependency array
    const [count, setcount] = useState(0)
    useEffect(()=>{
    console.log("UseEffectDemo")
    },[count])
  return (
    <div>UseEffectDemo
        <button onClick={()=>setcount(count+1)}>Click{count}</button>
    </div>
  )
}
