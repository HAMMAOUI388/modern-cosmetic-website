import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'; // Example import for React Router
import axios from "axios";

const Registre = () => {
     
    const [inputs,setInputs] = useState({
        username:"",
        email:"",
        password:"",
    })
 const [err,setError] =useState(null);
 const  navigate = useNavigate()

    const handlChange =async (e) =>{
        setInputs(prev=>({...prev,[e.target.name]: e.target.value}));
    }

const handlsubmit=async (e)=>{
    e.preventDefault()
    try{
        await axios.post("/auth/Register",inputs)
        navigate("/Login")
    }catch(err){
        setError(err.response.data)
    }
}
  return (
    <div className='auth'>
        <h1>Register</h1>
        <form>
            <input required type="text"  placeholder='username' name="username" onChange={handlChange}/>
            <input required type="email" placeholder='email' name="email" onChange={handlChange}/>
            <input required type="password"   placeholder='password' name="password" onChange={handlChange}/>
            <button type="submit" onClick={handlsubmit}>Register</button>
            {/* hanaya f had paragraph ta3 error nkhliha matbanch ta yla kan error b tabi3t l7al b base de donne */}
            { err && <p>{err}</p>}
            <span>Do you have an account ? <Link to ="/Login">Log In</Link> </span>
        </form>
    </div>
  )
}

export default Registre