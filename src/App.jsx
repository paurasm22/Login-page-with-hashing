import { useState } from 'react'
import Signup from './Components/Signup'
import { Route,Routes } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/register' element={<Signup/>}> </Route>
      <Route path='/login' element={<Login/>}> </Route>
      <Route path='/home' element={<Home/>}> </Route>





    </Routes>

    
    
    </>
  )
}

export default App
