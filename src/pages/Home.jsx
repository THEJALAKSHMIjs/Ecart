import React from 'react'
import { faCartShopping,faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useFetch from '../hook/UseFetch'
import { useDispatch } from 'react-redux'
import { addWishlistItem } from '../redux/slices/wishlistslice'
import { addItemTocart } from '../redux/slices/cartSlice'

function Home() {
  const data = useFetch('https://fakestoreapi.com/products')
  console.log(data);
  const dispatch = useDispatch()
  
  return (
    <div className='pt-40 mb-10 px-10 md:grid grid-cols-4'>
      {data?.length>0 &&
      data?.map((item)=>(
        <div className="p-2">
        <div className='p-3 rounded shadow-lg' >
          <img src={item?.image} alt="no image" className='w-full h-60'/>
        <h4 className='text-center text-3xl'>{item?.title.slice(0,25)}</h4>
        <p className='text-justify'>{item?.description.slice(0,50)}...</p>
        <p className='text-2xl'>price:<span className='text-violet-700'>{item.price}</span></p>
        <div className='flex justify-between'>
        <button onClick={()=>dispatch(addWishlistItem(item))} className='p-3 rounded bg-red-700 text-white'><FontAwesomeIcon icon={faHeart} className='me-2'/></button>
        <button onClick={()=>dispatch(addItemTocart(item))} className='p-3 rounded bg-green-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
        </div>
      </div>))
      }
      
      
    </div>
  )
}

export default Home