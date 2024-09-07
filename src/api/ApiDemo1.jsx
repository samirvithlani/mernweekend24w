import axios from 'axios'
import React, { useState } from 'react'
import { CustomLoader } from '../components/CustomLoader'

export const ApiDemo1 = () => {
    const getApiData = async()=>{
        setisLoading(true)
        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log("Res...",res)
        console.log("res",res.data)
        console.log("res",res.data.message)
        console.log("res",res.data.data)
        setmessage(res.data.message)
        setusers(res.data.data)
        setisLoading(false)
    }
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const [isLoading, setisLoading] = useState(false)
  return (
    <div>
        {
            isLoading && <CustomLoader/>
        }
        <button onClick={()=>{getApiData()}}>GET API DATA</button>
        {message}
        <ul>
            {
                users?.map((user)=>{
                    return <li>{user.name}</li>
                })
            }
        </ul>
    </div>
  )
}
