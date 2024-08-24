import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
    const {register,handleSubmit} = useForm();
    const [output, setoutput] = useState()

    //register is used to register the form elements
    //handleSubmit is used to handle the form submission

    const submitHandler = (data)=>{
        //data -->local variable
        //alert("form submitted");
        console.log(data);
        setoutput(data);
    }
  return (
    <div>
        <h1 style={{textAlign: 'center',color:"blue"}}>Form Demo 2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>FIRST NAME</label>
                <input type='text' placeholder='enter first name' {...register("firstname")}></input>
            </div>
            <div>
                <label>LAST NAME</label>
                <input type='text' placeholder='enter last name' {...register("lname")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type='number' placeholder='enter age' {...register("age")}></input>
            </div>
            <div>
                <label>GENDER</label>
                <input type='radio' value="male" {...register("gender")} name='gender'></input> MALE:
                <input type='radio' value="female" {...register("gender")} name='gender'></input> FEMALE:
            </div>
            <div>
                <label>SELECT COUNTRY</label>
                <select {...register("country")}>
                    <option>SELECT</option>
                    <option value="india">INDIA</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="australia">AUSTRALIA</option>
                </select>
            </div>
            <div>
                <label>SKILLS</label>
                <input type='checkbox' value="java" {...register("skills")} name='skills'></input> JAVA
                <input type='checkbox' value="react" {...register("skills")} name='skills'></input> REACT
                <input type='checkbox' value="angular" {...register("skills")} name='skills'></input> ANGULAR
                <input type='checkbox' value="node" {...register("skills")} name='skills'></input> NODE
            </div>
            <div>
                <input type='submit' value='Submit' className='btn btn-primary'/>
            </div>
        </form>
        { output &&
        <div>
            <h1>NAME = {output.firstname}</h1>
            <h2>LAST NAME = {output.lname}</h2>
            <h3>AGE = {output.age}</h3>
        </div>
        }
    </div>
  )
}
