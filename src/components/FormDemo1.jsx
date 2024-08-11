import React, { useState } from 'react'

export const FormDemo1 = () => {

    const [name, setname] = useState("")
    const [age, setage] = useState()
    const [selectedCountry, setselectedCountry] = useState("")
    const [color, setcolor] = useState("")

    const submitHandler = ()=>{
        //alert('Form Submitted')
        alert(`Name = ${name} \n Age = ${age} \n Country = ${selectedCountry}`)
    }
    const nameHandler = (event)=>{
        console.log(event.target.value)
        setname(event.target.value)
    }


  return (
    <div>
        <h1>FORM DEMO 1</h1>
        <div>
            <div>
                <label>NAME</label>
                <input onChange={(event)=>{nameHandler(event)}} type='text' placeholder='enter Name'></input>
                {name}
            </div>
            <div>
                <label>AGE</label>
                <input type='text' onChange={(event)=>setage(event.target.value)} placeholder='enter Age'></input>
                {age}
            </div>
            <div>
                <select onChange={(event)=>setselectedCountry(event.target.value)}>
                    <option value="india">INDIA</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                </select>
                {selectedCountry}
            </div>
            <div>
                <input type='color' onChange={(event)=>setcolor(event.target.value)}></input>
                {color}
            </div>
            <div>
                <button onClick={()=>{submitHandler()}}>SUBMIT</button>
            </div>
            
        </div>
    </div>
  )
}
