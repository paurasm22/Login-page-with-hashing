import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const Signup = () => {
  const navigate  = useNavigate()
  const [data,setData] = useState({
    name:"", email:'',password:''
  })
  const handleinput=(event)=>{
    setData({...data,[event.target.name]: event.target.value})
  }
const handleRegister=(event)=>{
  event.preventDefault();
  console.log(data)
  axios.post('http://localhost:8080/register',{data})
  .then((response)=>{
    console.log(response)
    navigate('/login')
  })
  .catch((error)=>{
    console.log(error) 
  })
}


  return (
    <Container className="container">
      <Formcontainer className="formcontainer">
      <h1>Register</h1>
      <label htmlFor="name"> Name</label>

      <input type="text" name='name' placeholder='Enter your name' onChange={handleinput}/>

      <label htmlFor="email"> Email</label>

      <input type="text" name='email' placeholder='Enter your Email' onChange={handleinput} />

      <label htmlFor="password">Password</label>

      <input type="text" name='password'placeholder='Enter your Password' onChange={handleinput} />

      <button type="button" class="btn btn-success" onClick={handleRegister}>Register</button>

      <h2>Already have an Account</h2>

      <Link to='/login' type="button" class="btn btn-light" style={{border:'2px black solid'}}>LOGIN</Link>


      </Formcontainer>
    </Container>
  )
}

export default Signup

const Formcontainer = styled.div`
  display: flex;
  flex-direction:column;
  gap: 10px;
  
  label{
    font-size:30px;
    font-weight: 600;

  }
  input{
    height: 40px;
    padding-left: 20px;
  }

`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: auto ;
  background-color: beige;
`
export {Formcontainer,Container} 