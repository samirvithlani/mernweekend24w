import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

export const ApiRev2 = () => {
    const {register,handleSubmit} = useForm()
    const submitHandler = async(data) => {
        //console.log(data)

        try{

            const res  = await axios.post('https://gorest.co.in/public-api/users',data,{
                headers:{
                    "Authorization":"Bearer 87a6e693c6ad5316132fb9df78c80553c9fe17fbee4945d3704e2b55fd94c2b5	"
                }
            })
            console.log(res.data)
            if(res.data.code===201){
                alert('USER CREATED')
            }

        }catch(e){
            console.log(e)
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
                <label>EMAIL</label>
                <input type="email" {...register('email')} />
            </div>
            <div>
                <label>GENDER</label>
                <input type='text' {...register('gender')}/>
            </div>
            <div>
                <label>STATUS</label>
                <input type='text' {...register('status')}/>
            </div>
            <div>
                <input type='submit' />
            </div>
        </form>

    </div>
  )
}
