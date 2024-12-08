import React, { useState } from 'react'
import CreateUser from './CreateUser'
import { PlusCircleOutlined, HeartOutlined } from '@ant-design/icons'

function Topbar() {
const [showCard,setShowCard] = useState(false)
    
  return (
    <div className='w-full h-10 flex justify-end items-center gap-1 bg-gray-200 fixed rounded-b-lg'>
        <button className='bg-[#fa5eb4c8] text-[12px] text-white font-semibold p-1.5 rounded-xl'><HeartOutlined/> Favourites</button>
        <PlusCircleOutlined style={{fontSize:"25px", cursor:"pointer"}} onClick={()=>setShowCard(true)} className='m-2'/>
        {showCard && <CreateUser onclose={()=>setShowCard(false)}/>}
    </div>
  )
}

export default Topbar