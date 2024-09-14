import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

export const UpdateUser = () => {
    const id = useParams().id

    const {register,handleSubmit} = useForm({
        defaultValues:async()=>{
            //const res = await axios.get(`https://node5.onrender.com/user/user/${id}`)
            const res = await axios.get('https://node5.onrender.com/user/user/'+id)
            return res.data.data
        }
    })

    const submitHandler = async(data) => {
        console.log("Data...",data)
        try{
        delete data._id
        const res = await axios.put(`https://node5.onrender.com/user/user/${id}`,data)
        console.log("res = ",res)
        }catch(err){
            console.log("Error...",err)
        }
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type="text" {...register('name')} />
            </div>
            <div>
                <label>AGE</label>
                <input type="text" {...register('age')} />
            </div>
            <div>
                <input type="submit" value="UPDATE" />
            </div>
        </form>
            
    </div>
  )
}
