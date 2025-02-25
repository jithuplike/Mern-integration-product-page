import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { data } from 'react-router-dom';

 
const Products = () => {

   const [users,setUsers] = useState([])

  // Fetch products from backend on component mount
  useEffect(() => {
    axios.get('http://localhost:4000/Books')
    .then(users =>setUsers(users.data))
    .catch(err => console.log(err))
},[])
  return (
     <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
      <div className="w-50"> 
      <table className='table'>
        <thead>
          <h1 className='  d-flex justify-content-center align-items-center'>AUTHORS</h1>
          <tr>
             
            <th>
              author
            </th>
             
            <th>
              Genres
            </th>
          </tr>
        </thead>
        <tbody>
          {
          users.map(user =>{
            return<tr>
              
              <td>{user.author}</td>
              
              <td>{user.genres}</td>

            </tr>
          })
          }

          
        </tbody>
      </table>
      </div>
     </div>
  
  )
}
 
export default Products
