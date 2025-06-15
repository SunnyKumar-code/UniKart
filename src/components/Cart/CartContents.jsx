import React from 'react'
import { RiDeleteBin3Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'

function CartContents({cart,userId,guestId}) {
    const dispatch = useDispatch();

    // Handle adding or subtracting the cart
    const handleAddToCart = (productId,delta,quantity,size,color)=>{
        const newQuantity = quantity + delta;
    }


  return (
    <div>
       {
        cartProduct.map((product,index)=>(
        <div key={index} className='flex items-start justify-between py-4 border-b'>
              <div className='flex items-start'>
                    <img 
                    src={product.image} 
                    alt={product.name}  
                    className='w-20 h-24 object-cover mr-4 rounded'/>
                    <div>
                        <h3>{product.name}</h3>
                        <p className='text-sm text-gray-500'>
                            size:{product.size} | colour:{product.color}
                        </p>
                        <div className='flex items-center mt-2'>
                            <button className='border rounded px-2 py-1 text-xl font-medium'>-</button>
                            <span className='mx-4'>{product.quantity}</span>
                            <button className='border rounded px-2 py-1 text-xl font-medium'>+</button>
                        </div>
                    </div>


                </div>
                <div>
                    <p>Rs.{product.price.toLocaleString()}</p>
                    <button>
                        <RiDeleteBin3Fill className='h-6 w-6 mt-2 text-red-600'/>
                    </button>
                </div>
            </div>
       ))
       } 
    </div>
  )
}

export default CartContents