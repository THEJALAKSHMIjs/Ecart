import React from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistslice'
import { addItemTocart } from '../redux/slices/cartSlice'

function Wishlist() {
  const WishlistArray = useSelector((state)=>state.Wishlist)
  console.log(WishlistArray);
  const dispatch = useDispatch()


  const wishes = (item)=>{
    dispatch(addItemTocart(item))
    dispatch(removeWishlistItem(item.id))
  }

  
  return (
    <>
    <h1 className='pt-32 text-center text-4xl text-violet-900'>Wishlist</h1>

  {WishlistArray?.length>0?
    <div className='pt-40 mb-10 px-10 md:grid grid-cols-4'>
     {WishlistArray?.map((item)=>(
      <div className="p-2">
        <div className='p-3 rounded'>
          <img src={item?.image} alt="no image" className='w-full h-60'/>
        <h4 className='text-center text-3xl'>{item?.title.slice(0,25)}...</h4>
        <p className='text-justify'>{item?.description.slice(0,100)}...</p>
        <p>price:<span className='text-violet-700'>$70</span></p>
        <div className='flex justify-between'>
        <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className='p-2 bg-red-700 text-white'> <FontAwesomeIcon icon={faTrashCan}/></button>
        <button onClick={()=>wishes(item)} className='p-2 bg-green-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
        </div>
      </div>))
      }
      
    </div>
:
    <div className='w-full mt-10 md:grid grid-cols-3'>
  <div></div>
  <div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzibBVD9w_go7Ofo5BK44_ufJf_y7qQAoPKg&s" alt="no image" className='w-full h-80'/>
  </div>
  <div></div>
  </div>}
    </>
  )
}

export default Wishlist