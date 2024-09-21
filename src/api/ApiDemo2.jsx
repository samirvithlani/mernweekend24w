import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const ApiDemo2 = () => {

    // const addUser = async()=>{
    //     const userObj = {
    //         name:"Ravi",
    //         email:"ravi@gmail.com",
    //         age:25,
    //         isActive:true

    //     }

    //     //req.body..
    //     const res = await axios.post("https://node5.onrender.com/user/user",userObj);
    //     console.log(res)

    // }

    const navigate = useNavigate();

    const {register,handleSubmit} = useForm();
    const submitHandler = async(data)=>{
        try{
        console.log("data,....",data);
        //data.isActive == "true"? data.isActive = true : data.isActive = false;
        const res = await axios.post("https://node5.onrender.com/user/user",data);
        console.log(res);
        //conditional rendering
        navigate("/apidemo1");
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div>
        {/* <button onClick={addUser}>Add User</button> */}
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type="text" {...register("name")}/>
            </div>
            <div>
                <label>EMAIL</label>
                <input type="text" {...register("email")}/>
            </div>
            <div>
                <label>AGE</label>
                <input type="text" {...register("age")}/>
            </div>
            <div>
                <label>STATUS</label>
                <br></br> ACTIVE <input type="radio" name="status" value="true" {...register("isActive")}/>
                <br></br> NOTACTIVE <input type="radio" name="status" value="false" {...register("isActive")}/>
            </div>
            <div>
                <input type="submit"/>
            </div>
        </form>
    </div>
  )
}
