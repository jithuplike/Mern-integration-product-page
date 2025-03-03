import React from 'react'

const AddProduct = () => {
  return (
    <div className="addProduct">
        <h3>Add New user</h3>
        <form className='addProductForm'>
            <div className='inputGroup'>
                <label htmlFor='name'>Name</label>
                <input
                type="text"
                id='name'
                name='name'
                autoComplete='off'
                placeholder='Enter your name'

                />
            </div>

        </form>
    </div>
  ) 
     
  
}

export default AddProduct;
