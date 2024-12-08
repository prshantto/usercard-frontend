import React, { useState } from "react";
import UpdateUser from "./UpdateUser";
import axios from "axios";

import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  EditOutlined,
  DeleteFilled,
  HeartFilled,
} from "@ant-design/icons";

function UserCard ({ name, email, phone, website, id }) {

  const [showCard,setShowCard] = useState(false)
  
  const randomNumber = () => {
    const number = Math.floor(Math.random() * 18) + 1;
    return number < 10 ? `0${number}` : `${number}`;
  };

  const likehandler = (event) => {
    let Favourites = true;
    const currentColor = event.target.style.color;
    if(currentColor==='rgb(235, 47, 150)'){
      event.target.style.color = ''
      Favourites = false;
      console.log(Favourites)
    }else{
      event.target.style.color = '#EB2F96'
      Favourites = true;
      console.log(Favourites)
    }
  }

  const deletehandler = async (e) => {
    const clickedElementId = e.target.id || e.currentTarget.id;
    await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/delete-user?id=${clickedElementId}`)
    console.log("Clicked element ID:", clickedElementId);
  }
  

  return (
    <>
      <div  className=" border border-gray-500 mt-12 ml-12 mr-12 lg:m-2,mt-12 md:m-2 md:mt-12">

        <div className="h-50% bg-gray-100 text-center flex items-center justify-center">
          <img
            className="rounded-full p-2 cursor-pointer"
            src={`https://api.dicebear.com/9.x/lorelei/svg?size=150&hair=variant${randomNumber()}&eyes=variant${randomNumber()}&mouth=happy${randomNumber()}&nose=variant04`}
            alt="Avatar"
          />
        </div>

        <div className="h-40% w-full">
          <h3 className="ml-2  font-semibold text-lg">{name}</h3>

          <div className="w-12 grid grid-cols-2 m-1 text-gray-600 text-[15px] text-nowrap">
          <MailOutlined/>
          <span className="px-1 pb-1 w-full">{email}</span>
          <PhoneOutlined/>
          <span className="px-1 pb-1 w-full">{phone}</span>
          <GlobalOutlined/>
          <span className="px-1 pb-1 w-full"> {website}</span>
          </div>

        </div>


        <div className="h-10% bg-gray-200 flex items-center justify-around cursor-pointer border-t border-gray-400 text-gray-600">
          <HeartFilled className="hover:text-[#EB2F96] " onClick={likehandler}/>
          <EditOutlined onClick={()=>setShowCard(true)} className="hover:text-blue-600" />
          {showCard && <UpdateUser onclose={()=>setShowCard(false)}/>}
          <button id={id} onClick={deletehandler}><DeleteFilled  className="hover:text-blue-600" /></button>
        </div>

      </div>
    </>
  );
}

export default UserCard;
