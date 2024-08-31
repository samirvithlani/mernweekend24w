import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    console.log("error..",errors);
    const submitHandler = (data)=>{
        console.log("data....",data);
    }
    const validationSchema = {
        age:{
            required:{
                value:true,
                message:"Age is Required*"
            },
            min:{
                value:18,
                message:"Age should be greater than 18"
            }
        }
    }
  return (
    <div>
        <h1 style={{color:"blue",textAlign:"center"}}>FORM DEMO 3</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' placeholder='enter name'
                 {...register("name",{required:{value:true,message:"Name is Required*"}})}></input>
                 {errors.name  && <span style={{color:"red"}}>{errors.name.message}</span>}
            </div>
            <div>
                <label>Age</label>
                <input type='number' placeholder='enter age'{...register("age",validationSchema.age)}></input>
                {errors.age && <span style={{color:"red"}}>{errors.age.message}</span>}
            </div>
            <div>
                <input type='submit' value='SUBMIT' className='btn btn-primary'></input>
            </div>
        </form>
    </div>
  )
}
