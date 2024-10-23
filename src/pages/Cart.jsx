import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { removeCartItem } from '../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { emptyCart } from '../redux/slices/cartSlice'

function Cart() {
  const [total, setTotal] =useState(0)
  const cartArray = useSelector((state)=>state.cartItem)
  console.log(cartArray);
  const dispatch = useDispatch()
  const navigate = useNavigate()

 const getTotal = ()=>{
  if(cartArray.length>0){
    setTotal(cartArray?.map((item)=>item.price).reduce((n1,n2)=>n1+n2))
  }
 }
 console.log(total);

 const handleCheckout = ()=>{
  alert('order placed succesfully')
  dispatch(emptyCart())
  navigate('/')
 }

 useEffect(()=>{
  getTotal()
 },[cartArray])
 
  
  return (
    <>
    <div className='pt-32'>
      <h1 className='text-center text-4xl text-violet-900'>cart</h1>
       {
       cartArray?.length>0 ?
        <div className='md:grid grid-cols-[2fr_1fr] my-10'>

          <div className='md:py-5 md:px-20'>
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='border border-gray-100  p-3 bg-gray-400 text-white'>n</th>
                  <th className='border border-gray-100  p-3 bg-gray-400 text-white'>Title</th>
                  <th className='border border-gray-100  p-3 bg-gray-400 text-white'>Images</th>
                  <th className='border border-gray-100  p-3 bg-gray-400 text-white'>Price</th>
                  <th className='border border-gray-100  p-3 bg-gray-400 text-white'>action</th>
                </tr>
              </thead>
              <tbody>
                { cartArray?.map((item , index)=>(
                  <tr>
                  <td className='border border-gray-100 p-3'>{index+1}</td>
                  <td className='border border-gray-100 p-3'>{item?.title}</td>
                  <td className='border border-gray-100 p-3 flex justify-center'><img src={item?.image} alt="no image" style={{width:'100px', height:'100px'}} /></td>
                  <td className='border border-gray-100 p-3'>$ {item?.price}</td>
                  <td className='border border-gray-100 p-3 text-center'><button onClick={()=>dispatch(removeCartItem(item?.id))} className='bg-red-700 p-3 text-white rounded'><FontAwesomeIcon icon={faTrashCan} /></button></td>
                </tr>
                ))}
                  
              </tbody>
            </table>
          </div>
            <div className='pt-5 px-10'>
            <div className='p-5 shadow-lg'>
              <h1 className='text-center text-3xl'>Cart summary</h1>
              <p className='mt-4 text-xl'>Total number of products : {cartArray?.length}</p>
              <p className='mt-2 text-xl'>Grand Total : ${total}</p>
              <button onClick={handleCheckout} className='w-full bg-green-600 text-white p-3 mt-4 hover:bg-white hover:border hover:border-green-600 hover:text-green-600'>Checkout</button>
            </div>
          </div>
        </div>
          :
        <div className='w-full mt-10 md:grid grid-cols-3'>
  <div></div>
  <div className='flex justify-center items-center flex-col my-10'><img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--wishlist-bucket-shopping-state-pack-design-development-illustrations-1800917.png" alt="no image" className='w-full h-80'/>
  <p className='text-violet-800 text-3xl '>your cart is empty</p>
 <Link to={'/'}> <button className='bg-green-700 text-white p-3 rounded mt-3'><FontAwesomeIcon icon={faBackward} className='me-2'/>Back Home</button></Link>
  </div>
        </div>
      }

     
    </div>
    
    </>
  )
}

export default Cart