import React, { useState } from 'react'
import { Formcontainer,Container } from './Signup'
import styled from 'styled-components'
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'
const Login = () => {
  const [loginmsg,setLoginmsg]=useState("");
  const navigate  = useNavigate()
  const [data,setData] = useState({
     email:'',password:''
  })
  const handleinput=(event)=>{
    setData({...data,[event.target.name]: event.target.value})
  }
const handleLogin=(event)=>{
  event.preventDefault();
  console.log(data)
  axios.post('http://localhost:8080/login',{data})
  .then((response)=>{
    setLoginmsg(response.data)
    if (response.data==="Success"){
      navigate('/home')
    }

  })
  .catch((error)=>{
    console.log(error) 
  })
}


  return (

    <div>
       <Container className="container">
      <Formcontainer className="formcontainer">
      <h1 style={{width:'500px'}}>LOG IN</h1>
    

      <label htmlFor="email"> Email</label>

      <input type="text" name='email' placeholder='Enter your Email' onChange={handleinput} />

      <label htmlFor="password">Password</label>

      <input type="text" name='password'placeholder='Enter your Password' onChange={handleinput} />

      {/* <button type="button" class="btn btn-success" onClick={handleRegister}>Register</button> */}

      <h2 style={{color:'red',textAlign:'center'}}>{loginmsg}</h2>
      

      <Link to='/login' type="button" class="btn btn-light" style={{border:'2px black solid', marginTop:'40px'}} onClick={handleLogin}>LOGIN</Link>


      </Formcontainer>
    </Container>
      



    </div>
  )
}

export default Login