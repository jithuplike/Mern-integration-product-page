import React, { useState } from 'react'
import Login from './components/Login'
 import { BrowserRouter as Router,Routes,Route,Link,Navigate } from 'react-router-dom'
 import Home from './components/Home'
  
 import Products from './components/Products'
 

const App = () => {
  const [isAuthenticated,setisAuthenticated] = useState (false)
  const handleLogin =() =>{
    setisAuthenticated(true)
  }
  const handleLogout = () =>{
    setisAuthenticated(false)
  }
  return (
   <Router>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
     <div className="container-fluid">
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link className='nav-link' to="/Home">Home</Link>

        </li>
        <li>
          <Link className='nav-link' to="/Products">Products</Link>
        </li>

        <li >
        {!isAuthenticated?(
          <Link className='nav-link' to="/login">Login</Link>
        ):(
          <button onClick={handleLogout} className='nav-link'to="/logout">Logout</button>
        )}

        </li>
         

      </ul>

     </div>
    </nav>

    <Routes>
     <Route path ="/" element={<Home/>}/>
     <Route path ="/login" element={<Login onLogin={handleLogin}/>}/>

     <Route path ="/Products" element={
      <protectedRoute isAuthenticated={isAuthenticated}>
        <Products/>
      </protectedRoute>
      }
      />

    </Routes>

   </Router>  
  )

  function protectedRoute({isAuthenticated,children }){
    return isAuthenticated?children: <Navigate to="/Login"/>

  }
}

export default App

