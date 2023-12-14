import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'; // Example import for React Router
import { AuthContext } from '../context/authcontext';


const Login = () => {
    const [inputs,setInputs] = useState({
        username:"",
        password:"",
    })
 const [err,setError] =useState(null);
 const  navigate = useNavigate();

 const {login} = useContext (AuthContext )

    const handlChange =async (e) =>{
        setInputs(prev=>({...prev,[e.target.name]: e.target.value}));
    }

const handlsubmit=async (e)=>{
    e.preventDefault()
    try{
        await login(inputs)
        navigate("/Home")
    }catch(err){
        setError(err.response.data)
    }
}
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input type="text" name="username" placeholder='username' onChange={handlChange}></input>
            <input type="password" name="password" placeholder='password' onChange={handlChange}></input>
            <button type="" onClick={handlsubmit}>Login</button>
            {/* hanaya f had paragraph ta3 error nkhliha matbanch ta yla kan error b tabi3t l7al b base de donne */}
{            err && <p>{err}</p>
}            <span>Don't you have an account ? <Link to ="/Register">Register</Link> </span>
        </form>
    </div>
  )
}

export default Login