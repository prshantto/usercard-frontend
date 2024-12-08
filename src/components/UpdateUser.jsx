import React from 'react'
import { useForm } from "react-hook-form"

function UpdateUser({onclose}) {

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        onclose()
        console.log(data);
        console.log(data.name)
      }

    //   console.log(watch("example")) // watch input value by passing the name of it

  return (
    <div className="h-screen w-screen flex justify-center items-center fixed inset-0  bg-black bg-opacity-30 backdrop-blur-sm">

       
        <div className='h-[80%] w-[60%] bg-white rounded-lg flex justify-around items-center flex-col'>

        <h3 className='text-xl font-bold m-0'>Update User</h3>

        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={handleSubmit(onSubmit)} className='w-[90%] grid grid-cols-2 gap-2'>
      {/* register your input into the hook by invoking the "register" function */}

      <div className=''>
      <label htmlFor="name" className='block'>Name</label>
      <input placeholder="Enter your Name" id='name' {...register("name", { required: true })} className='border border-gray-500 h-8 w-full rounded-lg text-sm p-2 mt-1'/> 
      </div>
      <div>
      <label htmlFor="username" className='block'>Username</label>
      <input placeholder="Enter username" id='username' {...register("username", { required: true })} className='border border-gray-500 h-8 w-full rounded-lg text-sm p-2 mt-1'/>
      </div>
      <div>
      <label htmlFor="email" className='block'>Email ID</label>
      <input placeholder="Enter your email ID" id='email' {...register("email", { required: true })} className='border border-gray-500 h-8 w-full rounded-lg text-sm p-2 mt-1'/>
      </div>
      <div>
      <label htmlFor="phone" className='block'>Phone</label>
      <input placeholder="Enter your Phone Number" id='phone' {...register("phone", { required: true })} className='border border-gray-500 h-8 w-full rounded-lg text-sm p-2 mt-1'/>
      </div>
      <div>
      <label htmlFor="website" className='block'>Website URL</label>
      <input placeholder="website URL" id='website' {...register("website", { required: true })} className='border border-gray-500 h-8 w-full rounded-lg text-sm p-2 mt-1'/>
      </div>
      <div>
      <label htmlFor="company" className='block'>Company Name/Moto</label>
      <input placeholder="company name/moto" id='company' {...register("company")} className='border border-gray-500 h-8 w-full rounded-lg text-sm p-2 mt-1'/>
      </div>
      <div className='col-span-2'>
        {/* include validation with required or other standard HTML validation rules */}
      <label htmlFor="address" className='block'>Address</label>
      <input placeholder="street / suite / city / zipcode" id='address' {...register("address")} className='border border-gray-500 h-8 w-full rounded-lg text-md p-2 mt-1'/>
      </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <div className='h-full w-full flex justify-between items-center col-span-2 mt-2'>
      <button onClick={(onclose)} className='bg-[#F05656] h-10 w-20 rounded-md text-white font-bold cursor-pointer hover:bg-[#f47777]'>Cancel</button>
      <input type="submit" className='bg-[#2E2E2E] h-10 w-20 rounded-md text-white font-bold cursor-pointer hover:bg-[#545454]' />
      </div>
    </form>
        </div>

    </div>
  )
}

export default UpdateUser
