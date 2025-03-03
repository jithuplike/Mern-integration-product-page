 import React, { useEffect, useState } from 'react'
 import "./product.css"
import axios from 'axios'
import { Link } from 'react-router-dom'
 const Products = () => {
  const [users,setUsers] = useState ([])
  useEffect(()=>{
    const fetchData = async()=>{
       try {
        const response = await axios.get("http://localhost:4000/Books")
        setUsers(response.data)
       } catch (error) {
        console.log("Error while fetching data",error)
       }
    }
    fetchData();
  },[]);
   return (
     <div className='productTable'>
      <Link to="/add" type="button" className="btn btn-primary">Add User <i className="fa-solid fa-user-plus"></i></Link>
         <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>S.No.</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Address</th>
                <th scope='col'>Actions</th>


              </tr>
            </thead>
            <tbody>
              {users.map((user,index)=>{
               
                  return(
                  <tr>
                  <td>{index+1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td className='actionButtons'> 
                  
                  <button type="button" className="btn btn-info"> <i className="fa-solid fa-pen-to-square"></i></button>
                  <button type="button" className="btn btn-danger"><i className="fa-solid fa-trash"></i> </button>
                     </td>
  
  
                </tr>
                  )
              })}
             
            </tbody>
         </table>
     </div>
   )
 }
 
 export default Products
 