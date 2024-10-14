import axios from 'axios'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export const CreateUser = () => {
    const [show, setshow] = useState(false)
    const {register,handleSubmit,formState:{errors}} = useForm()
    const submitHandler = async(data) => {
        console.log("Data...",data)
        const res = await axios.post("https://node5.onrender.com/user/user",data)
        console.log("res = ",res)
        setshow(false)

    }
    const validationSchema = {
        name:{
            required:{
                value:true,
                message:'Name is required'
            }
        },
        email:{
            required:{
                value:true,
                message:'Email is required'
            }
        }

    }
  return (
    <div>
        <h1>Create user</h1>
        <button className='btn btn-primary' onClick={()=>{setshow(true)}}>create user</button>
        <Modal show={show}
        animation={false}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered>
            <Modal.Header>
                <Modal.Title>Create User</Modal.Title>
                <button onClick={()=>{setshow(false)}}>Close</button>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Name</label>
                    <input type='text' {...register("name",validationSchema.name)}></input>
                    {
                        errors.name && <p>{errors.name.message}</p>
                    }
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' {...register("email",validationSchema.email)}></input>
                    {
                        errors.email && <p>{errors.email.message}</p>
                    }
                </div>
                <div>
                    <label>AGE</label>
                    <input type='text' {...register("age")}></input>
                </div>
                <div>
                    <label>STATUS</label><br></br>
                    ACTIVE : <input type='radio' value='true' {...register("isActive")}></input>
                    <br></br>
                    INACTIVE : <input type='radio' value='false' {...register("isActive")}></input>
                </div>
                <div>
                    <input type='submit' value='CREATE USER'></input>
                </div>
            </form>
            </Modal.Body>
         </Modal>
    </div>
  )
}
